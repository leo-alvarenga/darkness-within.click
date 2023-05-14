import { Page, Profile } from '../../components';

function Home() {
  return (
    <Page
      info={{
        title: 'page.home.title',
        path: '/'
      }}
    >
      <Profile />
    </Page>
  );
}

export default Home;
