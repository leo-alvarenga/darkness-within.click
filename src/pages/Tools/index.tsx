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

export default Tools;
