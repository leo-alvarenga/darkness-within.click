import React from 'react';

import { Page, ToolList } from '../../components';

function Tools() {
  return (
    <Page
      info={{
        title: 'page.tools.title',
        path: '/tools'
      }}
    >
      <ToolList />
    </Page>
  );
}

export { default as Chmod } from './Chmod';

export default Tools;
