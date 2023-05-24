import { Link } from 'react-router-dom';
import { ReactNode, useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import { paths } from '../../common';
import LinkArea from '../LinkArea';
import LanguageSwitch from '../LanguageSwitch';
import { useClickOutside } from '../../hooks';

export interface StatusbarProps {
  timeFormat:
    | 'HH:mm'
    | 'HH:mm:ss'
    | 'DD/MM HH:mm:ss'
    | 'MM/DD HH:mm:ss'
    | 'DD/MM HH:mm'
    | 'MM/DD HH:mm';

  menuContent: ReactNode;
  menuVisible: boolean;
  onMenuVisibilityChange: (value: boolean) => void;
}

function Statusbar({
  timeFormat,
  menuContent,
  menuVisible,
  onMenuVisibilityChange,
}: StatusbarProps) {
  const [time, setTime] = useState(dayjs(new Date()));

  const menuWrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuWrapperRef, () => onMenuVisibilityChange(false), 'menu-wrapper-workspace');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeFormat]);

  useEffect(
    () => onMenuVisibilityChange && onMenuVisibilityChange(menuVisible),
    [menuVisible, onMenuVisibilityChange],
  );

  return (
    <div className='h-fit px-4 py-2 text-md gap-4 w-full items-center flex flex-row flex-wrap bg-gray1'>
      <i
        className={`fa-solid ${menuVisible ? 'fa-xmark text-red-500' : 'fa-bars'} cursor-pointer`}
        onClick={() => onMenuVisibilityChange(!menuVisible)}
      />

      <LinkArea />

      {menuVisible && (
        <div
          id='menu-wrapper-workspace'
          ref={menuWrapperRef}
          className={`
            fixed top-12 left-4 ml-[-0.5rem] border-green3 
            rounded-lg bg-gray1 p-2 border-2
            after:content-[''] after:absolute 
            after:left-[13px] after:top-[-18px] 
            after:-translate-x-1/2 after:border-8 
            after:border-x-transparent after:border-t-transparent 
            after:border-b-green3
          `}
        >
          {menuContent}
        </div>
      )}

      <span className='ml-auto'>
        <LanguageSwitch />
      </span>
      <span>{time.format(timeFormat)}</span>
      <Link to={paths.TOOLS.root}>
        <i className='fa-solid fa-power-off text-red-700'></i>
      </Link>
    </div>
  );
}

export default Statusbar;
