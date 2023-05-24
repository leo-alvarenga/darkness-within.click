import React from 'react';

import { Page, ToolList } from '../../components';

function Tools() {
  return (
    <Page
      info={{
        title: 'page.tools.title',
        path: '/tools',
      }}
    >
      <ToolList />
    </Page>
  );
}

export { default as ChmodPage } from './ChmodPage';
export { default as WorkspacePage } from './WorkspacePage';

export default Tools;
