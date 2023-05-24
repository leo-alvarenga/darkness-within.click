import { Chmod, Page } from '../../../components';

import { CHMOD_INFO } from '../../../common';

function ChmodPage() {
  return (
    <Page
      info={{
        title: CHMOD_INFO.name,
        path: CHMOD_INFO.path,
      }}
    >
      <Chmod />
    </Page>
  );
}

export default ChmodPage;
