import React, { useCallback } from "react";

import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { pathArray } from "../../../common";

function LinkArea() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const getClassName = useCallback((selected: boolean) => {
    let base = "px-2 py-1 transition-all cursor-pointer ";

    if (selected)
      return base.concat(
        "text-background bg-red-500 hover:bg-red-500 active:green3"
      );

    return base.concat(
      "text-background bg-foreground hover:bg-red-300 active:bg-red-300"
    );
  }, []);

  return (
    <span className="flex flex-row gap-0 rounded-lg overflow-hidden">
      {pathArray.map(({ icon, name, path }) => (
        <Link
          className={getClassName(
            path === pathname || (path.length > 1 && pathname.includes(path))
          )}
          to={path}
        >
          <span className="flex flex-row gap-1 items-center">
            <i className={icon} />
            {t(name)}
          </span>
        </Link>
      ))}
    </span>
  );
}

export default LinkArea;
