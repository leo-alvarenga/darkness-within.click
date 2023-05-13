import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { availableTools } from "../../common";

function ToolList() {
  const { t } = useTranslation();

  const pathname = useMemo(() => location.pathname, [location.pathname]);

  return (
    <div className="flex flex-row flex-wrap w-full gap-4 justify-center mt-4">
      {availableTools.map(({ description, icon, name, path }) => (
        <Link
          className="flex flex-col gap-2 items-center bg-background p-4 max-w-[30%] max-lg:max-w-full rounded-lg hover:-translate-y-1 hover:scale-110 transition-all"
          to={`${path}/?from=${pathname}`}
        >
          <span className="flex flex-row gap-2 items-center bg-black2 p-2 rounded-lg">
            <i className={`${icon} text-green3`} />
            {t(name)}
          </span>
          <span className="text-center">{t(description)}</span>

          <span className="bg-black2 p-2 rounded-lg">
            {t("shared.seeMore")}
            <i
              className={`
                ml-3 fa-solid text-green3
                fa-arrow-up-right-from-square
              `}
            />
          </span>
        </Link>
      ))}
    </div>
  );
}

export default ToolList;
