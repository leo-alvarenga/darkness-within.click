import React from 'react';

import { Page, ToolList } from '../../components';

function Tools() {
  return (
    <Page>
      <ToolList />
    </Page>
  );
}

export { default as Chmod } from './Chmod';

export default Tools;
