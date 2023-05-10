import { ReactNode, useMemo } from "react";
import { useTranslation } from "react-i18next";

export interface TooltipProps {
  content: string | ReactNode;
  children: ReactNode;
  placement?: "top" | "bottom" | "over";
  background?: string;
  disableArrow?: boolean;
}

function Tooltip({
  content,
  children,
  placement = "top",
  background = "background",
  disableArrow,
}: TooltipProps) {
  const { t } = useTranslation();

  const className = useMemo(() => {
    let base = `
      absolute pointer-events-none 
      whitespace-nowrap rounded 
      bg-${background} text-foreground 
      px-2 py-1 transition -translate-x-1/2 left-1/2 
      opacity-0 group-hover:opacity-100 z-50 `;

    const baseArrow = ` before:absolute before:left-1/2 
      before:-translate-x-1/2 
      before:content-[''] `;

    switch (placement) {
      case "top":
        base = base.concat(" -top-10 ");

        if (disableArrow) return base;
        return base.concat(
          baseArrow,
          ` before:border-t-4 before:border-t-${background} before:top-full`
        );
      case "bottom":
        base = base.concat(" -bottom-10 ");

        if (disableArrow) return base;
        return base.concat(
          baseArrow,
          ` before:border-b-4 before:border-b-${background} before:bottom-full`
        );
      case "over":
        return base.concat(" -top-2 ");
    }
  }, []);

  return (
    <div className="group relative">
      <span className={className}>
        {typeof content === "string" ? t(content) : content}
      </span>

      {children}
    </div>
  );
}

export default Tooltip;
