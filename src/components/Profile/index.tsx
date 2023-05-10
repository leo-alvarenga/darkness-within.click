import { useTranslation } from "react-i18next";
import ProfilePic from "./ProfilePic";
import Name from "./Name";

function Profile() {
  const { t } = useTranslation();

  return (
    <div className={`
        w-full flex flex-row
        items-center max-xl:flex-col
        max-xl:content-center
        p-2 gap-4
      `}
    >
      <ProfilePic src="../,./../public/bloody.png" />

      <div className="flex flex-col items-center">
        <Name />
        <p className="w-full text-center text-lg">
          {t("page.home.description")}
        </p>
      </div>
    </div>
  );
}

export default Profile;

/*
  Deep within the soul's abyss,
  Lurks a darkness without end,
  A shadowed realm of emptiness,
  A place where light will never blend.

  The darkness within is like a curse,
  A weight that pulls me down,
  A haunting presence I can't reverse,
  An ever-present frown.

  I try to fight and break free,
  To find a glimmer of hope,
  But the darkness within grips me,
  And drags me down an endless slope.

  So I'll keep searching for the light,
  And try to break the spell,
  For in the darkness there's no respite,
  Just an endless, lonely hell.
*/
