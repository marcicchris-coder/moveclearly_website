import { IdxWidgetMount } from '@/components/sections/idx-widget-mount';

const WIDGET_SRC = 'https://moveclearly.idxbroker.com/idx/widgets/141752';

export function IdxFeaturedWidget() {
  return (
    <div className='rounded-xl border bg-white p-4 md:p-6'>
      <IdxWidgetMount scriptId='idxwidgetsrc-141752' src={WIDGET_SRC} redirectHref='/listings' />
    </div>
  );
}
