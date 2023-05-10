import { ReactNode } from "react";
import LanguageSwitch from "./LanguageSwitch";
import FloatingArea from "./FloatingArea";
import { NotificationDataType } from "./FloatingArea/Notification";

export interface PageProps {
  children?: ReactNode;
  notifications?: NotificationDataType[];
}

function Page({ children, notifications }: PageProps) {
  return (
    <div className="flex justify-center min-h-[100vh] h-[100%] bg-background p-8 max-xl:p-4">
      <div className="flex items-center flex-col gap-4 w-[60%] max-xl:w-full h-fit p-4 mb-28 rounded-lg bg-black2 text-foreground">
        <div className="flex w-[100%] items-start">
          <FloatingArea notifications={notifications} />
          <LanguageSwitch />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Page;
