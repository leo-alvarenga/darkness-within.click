import { useTranslation } from 'react-i18next';
import { ToolInfo, availableToolsOnWorkspace } from '../../../../common';
import { Tooltip } from '../../../../components';

export interface ToolListProps {
  onSelection: (tool: ToolInfo) => void;
}

function ToolList({ onSelection }: ToolListProps) {
  const { t } = useTranslation();

  return (
    <ul className='flex flex-col w-fit gap-2 list-none m-0 p-0'>
      {availableToolsOnWorkspace.map((tool) => (
        <li
          className={`
          rounded-lg bg-background 
          p-2 flex flex-row gap-2 items-center
          min-w-fit w-full
        `}
          onClick={() => onSelection(tool)}
        >
          {tool.icon && <i className={`${tool.icon} text-green3`} />}
          <span>{t(tool.name)}</span>

          <Tooltip
            className='ml-auto'
            content={t(tool.masterOnly ? 'common.tools.masterOnly' : 'common.tools.master')}
          >
            <i className='fa-solid fa-up-right-and-down-left-from-center' />
          </Tooltip>
          <Tooltip content={t(tool.masterOnly ? 'common.tools.noSlave' : 'common.tools.slave')}>
            <i
              className={`fa-solid fa-down-left-and-up-right-to-center ${
                tool.masterOnly ? 'opacity-40' : ''
              }`}
            />
          </Tooltip>
        </li>
      ))}
    </ul>
  );
}

export default ToolList;
