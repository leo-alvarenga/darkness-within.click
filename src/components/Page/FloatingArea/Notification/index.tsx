import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { NotificationDataType } from "../../../../types";

// TODO:
// popup animation
// dismiss animation
function Notification({ alwaysShow, title, icon, body, redirect }: NotificationDataType) {
  const { t } = useTranslation();

  const [show, setShow] = useState(false);

  const savePreference = useCallback((href?: string) => {
    setShow(false);

    if (alwaysShow) return;
    
    try {
      localStorage.setItem(title, 'false');
    } catch (e) {
      console.log(`Could not save preferences for '${title}'`);
    }

    if (href) window.location.href = href;
  }, [alwaysShow]);

  useEffect(() => {
    const value = localStorage.getItem(title);
    if (!value) return setShow(true);

    setShow(JSON.parse(value));
  }, []);

  return (
    show
    ? (
      <span
        className={`
          flex flex-col gap-2 w-full
          p-4 rounded bg-background
          border-2 border-black2 font-term
          transition-all z-50
        `}
      >
        <span className="inline-flex items-start gap-4">
          {icon && <i className={`text-red-500 pt-2 ${icon}`} />}
          <h3 className="text-lg">{t(title)}</h3>

          <i
            className={`
              pt-2 ml-auto mr-1 text-md
              cursor-pointer transition-all
              hover:text-red-600
              fa-solid fa-xmark
            `}
            onClick={() => setShow(false)}
          />
        </span>

        {body && <p>{body}</p>}

        {
          redirect && ( 
            <a
              className="bg-red-500 text-black w-fit px-2 rounded-lg ml-auto cursor-pointer"
              onClick={() => savePreference(redirect.to)}
            >
              {t(redirect.label)}
              <i
                className={`
                  ml-3 fa-solid 
                  fa-arrow-up-right-from-square
                `}
              />
            </a>
          )
        }
      </span>
    )
    : null
  );
}

export default Notification;
