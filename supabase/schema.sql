create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  type text not null,
  source text not null,
  message text,
  "locationInterest" text,
  "createdAt" timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads ("createdAt" desc);
create index if not exists leads_type_idx on public.leads (type);
