const WIDGET_SRC = 'https://moveclearly.idxbroker.com/idx/widgets/141752';

export function IdxFeaturedWidget() {
  return (
    <div className='rounded-xl border bg-white p-4 md:p-6'>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script id='idxwidgetsrc-141752' charSet='UTF-8' type='text/javascript' src={WIDGET_SRC} />
    </div>
  );
}
