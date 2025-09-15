
/* eslint-disable react/jsx-no-useless-fragment */
import type { Meta, StoryObj } from '@storybook/react';

import PegaFranklinExtensionsWebMessagingWidget from './index';

const meta: Meta<typeof PegaFranklinExtensionsWebMessagingWidget> = {
  title: 'PegaFranklinExtensionsWebMessagingWidget',
  component: PegaFranklinExtensionsWebMessagingWidget,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof PegaFranklinExtensionsWebMessagingWidget>;

if (!window.PCore) {
  window.PCore = {} as any;
}

export const BasePegaFranklinExtensionsWebMessagingWidget: Story = (args: any) => {
  return (
      <>
        <PegaFranklinExtensionsWebMessagingWidget {...args} />
      </>
    );
};

BasePegaFranklinExtensionsWebMessagingWidget.args = {
  scriptSrc: 'https://widget.use1.chat.pega.digital/e03b7c71-ac8b-4cb4-b890-d813ff3b9074/widget.js',
  scriptId: 'pega-wm-chat',
  async: true,
  defer: true,
  autoLoad: true,
  dataAttrs: '{"tenant":"dev"}'
};
