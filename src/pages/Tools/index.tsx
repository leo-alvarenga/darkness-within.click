import React from 'react';

import { personalSiteNotification } from '../../common';
import { Page, ToolList } from '../../components';

function Tools() {
  return (
    <Page notifications={[personalSiteNotification]}>
      <ToolList />
    </Page>
  );
}

export { default as Chmod } from './Chmod';

export default Tools;
