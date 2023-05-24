import { useMemo } from 'react';
import { TOOL_CODENAME, ToolInfo } from '../../../../common';
import { Tooltip } from '../../../../components';
import { useTranslation } from 'react-i18next';

export interface PlacementViewProps {
  isMasterBusy?: boolean;
  isChild1Busy?: boolean;
  isChild2Busy?: boolean;
  selectedApp?: ToolInfo;
  onChange: (positision: 'master' | 'child1' | 'child2', code?: TOOL_CODENAME) => void;
}

interface IconsProps {
  tip: string;
  icon: string;
  onClick: () => void;
  onRemove: () => void;
  busy?: boolean;
}

function PlacementView({
  isChild1Busy,
  isChild2Busy,
  isMasterBusy,
  selectedApp,
  onChange,
}: PlacementViewProps) {
  const commonClasses = useMemo(
    () => `
    rounded-lg bg-background p-2 
    flex flex-row justify-center 
    items-center gap-2 cursor-pointer
  `,
    [],
  );

  const masterClass = useMemo(
    () => `
    w-[55%] max-w-[55%] max-lg:w-full 
    max-lg:max-w-full max-h-full ${commonClasses}
  `,
    [commonClasses],
  );

  const slaveClass = useMemo(() => `flex-grow flex flex-col gap-1`, []);
  const childrenClass = useMemo(() => ` ${commonClasses}`, [commonClasses]);

  const masterIcon = useMemo(
    () => `fa-solid ${isMasterBusy ? 'fa-repeat' : 'fa-plus'}`,
    [isMasterBusy],
  );
  const [child1Icon, child2Icon] = useMemo(() => {
    let temp1 = 'fa-solid fa-plus';
    let temp2 = 'fa-solid fa-plus';

    if (selectedApp && selectedApp.masterOnly) {
      temp1 = temp1.replace('fa-plus', 'fa-lock opacity-60');
      temp2 = temp2.replace('fa-plus', 'fa-lock opacity-60');
    } else {
      if (isChild1Busy) {
        temp1 = temp1.replace('fa-plus', 'fa-repeat');
      }

      if (isChild2Busy) {
        temp2 = temp2.replace('fa-plus', 'fa-repeat');
      }
    }

    return [temp1, temp2];
  }, [isChild1Busy, isChild2Busy, selectedApp]);

  return selectedApp ? (
    <div className='p-2 flex flex-row gap-1 min-w-[200px]'>
      <div id='master' className={masterClass}>
        <Icons
          tip={`common.${isMasterBusy ? 'replace' : 'add'}`}
          busy={isMasterBusy}
          icon={masterIcon}
          onClick={() => {
            if (selectedApp.masterOnly) return;
            onChange('master', selectedApp.code);
          }}
          onRemove={() => {
            onChange('master');
          }}
        />
      </div>
      <div id='slave' className={slaveClass}>
        <div id='child1' className={childrenClass}>
          <Icons
            tip={`common.${isChild1Busy ? 'replace' : 'add'}`}
            busy={isChild1Busy}
            icon={child1Icon}
            onClick={() => {
              if (selectedApp.masterOnly) return;
              onChange('child1', selectedApp.code);
            }}
            onRemove={() => {
              onChange('child1');
            }}
          />
        </div>
        <div id='child2' className={childrenClass}>
          <Icons
            tip={`common.${isChild2Busy ? 'replace' : 'add'}`}
            busy={isChild2Busy}
            icon={child2Icon}
            onClick={() => {
              if (selectedApp.masterOnly) return;
              onChange('child2', selectedApp.code);
            }}
            onRemove={() => {
              onChange('child2');
            }}
          />
        </div>
      </div>
    </div>
  ) : null;
}

const Icons = ({ busy, icon, onClick, onRemove, tip }: IconsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Tooltip content={t(tip)}>
        <i className={icon} onClick={onClick} />
      </Tooltip>
      {busy && (
        <Tooltip content={t('common.remove')}>
          <i className='fa-solid fa-trash text-red-500' onClick={onRemove} />
        </Tooltip>
      )}
    </>
  );
};

export default PlacementView;
