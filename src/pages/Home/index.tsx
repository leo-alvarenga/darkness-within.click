import {
  Page,
  Profile,
} from "../../components";

const personalSiteNotification = {
  title: 'page.home.notification.title',
  icon: 'fa-solid fa-lightbulb',
  redirect: {
    to: 'https://leo-alvarenga.click',
    label: 'page.home.notification.label',
  }
}

function Home() {
  return (
    <Page notifications={[personalSiteNotification]}> 
      <>
        <Profile />
      </>
    </Page>
  );
}

export default Home;
