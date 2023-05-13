import {
  Page,
  Profile,
} from "../../components";

import { personalSiteNotification } from "../../common";

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
