import Image from 'next/image';
import Link from 'next/link';
import { Fragment, ReactNode } from 'react';

type MarkdownContentProps = {
  source: string;
};

function parseInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text))) {
    const [fullMatch, label, href] = match;
    const index = match.index;

    if (index > lastIndex) {
      nodes.push(text.slice(lastIndex, index));
    }

    const key = `${keyPrefix}-${index}`;
    const isExternal = /^https?:\/\//i.test(href);
    if (isExternal) {
      nodes.push(
        <a key={key} href={href} target='_blank' rel='noopener noreferrer'>
          {label}
        </a>
      );
    } else {
      nodes.push(
        <Link key={key} href={href}>
          {label}
        </Link>
      );
    }

    lastIndex = index + fullMatch.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length > 0 ? nodes : [text];
}

export function MarkdownContent({ source }: MarkdownContentProps) {
  const lines = source.split(/\r?\n/);
  const blocks: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      i += 1;
      continue;
    }

    if (line.startsWith('### ')) {
      blocks.push(
        <h3 key={`h3-${i}`} className='text-xl font-semibold'>
          {line.slice(4)}
        </h3>
      );
      i += 1;
      continue;
    }

    if (line.startsWith('## ')) {
      blocks.push(
        <h2 key={`h2-${i}`} className='text-2xl font-semibold'>
          {line.slice(3)}
        </h2>
      );
      i += 1;
      continue;
    }

    if (line.startsWith('# ')) {
      blocks.push(
        <h1 key={`h1-${i}`} className='text-3xl font-bold'>
          {line.slice(2)}
        </h1>
      );
      i += 1;
      continue;
    }

    const imageMatch = line.match(/^!\[(.*?)\]\((.*?)\)$/);
    if (imageMatch) {
      const [, alt, src] = imageMatch;
      blocks.push(
        <div key={`img-${i}`} className='my-6 overflow-hidden rounded-xl border'>
          <Image
            src={src}
            alt={alt || 'Blog image'}
            width={1400}
            height={900}
            className='h-auto w-full object-cover'
          />
        </div>
      );
      i += 1;
      continue;
    }

    if (line.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2).trim());
        i += 1;
      }
      blocks.push(
        <ul key={`ul-${i}`} className='list-disc space-y-2 pl-5'>
          {items.map((item, idx) => (
            <li key={`li-${i}-${idx}`}>{parseInline(item, `ul-${i}-${idx}`)}</li>
          ))}
        </ul>
      );
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i += 1;
      }
      blocks.push(
        <ol key={`ol-${i}`} className='list-decimal space-y-2 pl-5'>
          {items.map((item, idx) => (
            <li key={`oli-${i}-${idx}`}>{parseInline(item, `ol-${i}-${idx}`)}</li>
          ))}
        </ol>
      );
      continue;
    }

    const paragraphLines: string[] = [];
    while (i < lines.length) {
      const current = lines[i].trim();
      if (!current) break;
      if (current.startsWith('#') || current.startsWith('- ') || /^\d+\.\s+/.test(current) || /^!\[.*\]\(.*\)$/.test(current)) {
        break;
      }
      paragraphLines.push(current);
      i += 1;
    }

    const paragraph = paragraphLines.join(' ');
    blocks.push(
      <p key={`p-${i}`} className='leading-relaxed text-muted-foreground'>
        {parseInline(paragraph, `p-${i}`)}
      </p>
    );
  }

  return (
    <div className='space-y-5'>
      {blocks.map((block, idx) => (
        <Fragment key={`block-${idx}`}>{block}</Fragment>
      ))}
    </div>
  );
}
