import { I18nextProvider } from "react-i18next";
import Router from "./routes";
import i18next from "./config/i18n";

import { changeLanguage, getLocaleFromLS } from "./config/i18n";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    changeLanguage(getLocaleFromLS(), i18next);
  }, []);

  return (
    <I18nextProvider i18n={i18next}>
      <Router />
    </I18nextProvider>
  );
}

export default App;
