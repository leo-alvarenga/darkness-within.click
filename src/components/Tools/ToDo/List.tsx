import { ToDoTask } from '../../../types';
import { useCallback, useRef, useState } from 'react';
import { Switch, TextField, Tooltip } from '../..';
import { useTranslation } from 'react-i18next';
import { useClickOutside } from '../../../hooks';

export interface ListProps {
  tasks: ToDoTask[];
  onChange: (title: string, index?: number) => void;
}

function List({ tasks, onChange }: ListProps) {
  const { t } = useTranslation();
  const [showField, setShowField] = useState<number>();
  const [titleInEdition, setTitleInEdition] = useState('');

  const inputRef = useRef<HTMLDivElement>(null);

  const handleAdd = useCallback(() => {
    const index = tasks.length;

    const name = t('page.tools.todo.new');

    const count = tasks.filter(({ title }) => title.includes(name)).length;

    const title = `${name} ${count}`;
    onChange(title);
    setShowField(index);
    setTitleInEdition(title);
  }, [onChange, t, tasks]);

  const handleDelete = useCallback(
    (index: number) => {
      onChange('', index);
      setShowField(undefined);
    },
    [onChange],
  );

  const enableTaskEdition = useCallback(
    (index: number) => {
      setShowField(index);
      setTitleInEdition(tasks[index % tasks.length].title);
    },
    [tasks],
  );

  const submitTaskChanges = useCallback(() => {
    onChange(titleInEdition, showField);

    setTitleInEdition('');
    setShowField(undefined);
  }, [onChange, showField, titleInEdition]);

  useClickOutside(inputRef, () => setShowField(undefined), 'task-title-text-field');

  return (
    <ul className='flex flex-col items-start w-[35%] max-xl:w-[60%] list-none p-2 text-xl max-lg:text-md'>
      {tasks.map(({ title, finishedIn }, index) => (
        <li className='w-full flex flex-row gap-2 items-center px-2'>
          <Switch on={!!finishedIn} onChange={() => onChange(title, index)} />
          {showField === index ? (
            <span id='task-title-text-field' className='flex' ref={inputRef}>
              <TextField
                className='w-full'
                value={titleInEdition}
                keys={['enter', 'escape']}
                onChange={(e) => setTitleInEdition(e.target.value)}
                onKeyCapture={submitTaskChanges}
              />
            </span>
          ) : (
            <>
              <Tooltip className='w-[85%]' content={t('page.tools.todo.edit', { title })}>
                <span
                  className={`
                        flex max-w-full overflow-hidden
                        cursor-text whitespace-nowrap overflow-ellipsis
                        ${finishedIn ? 'line-through opacity-70' : ''}
                      `}
                  onClick={() => enableTaskEdition(index)}
                >
                  {title || '?'}
                </span>
              </Tooltip>

              <i
                className={`
                      text-sm cursor-pointer 
                      text-red-500 ml-auto 
                      fa-solid fa-trash
                    `}
                onClick={() => handleDelete(index)}
              />
            </>
          )}
        </li>
      ))}

      <li
        className='w-full text-center cursor-pointer mt-2 rounded-lg bg-background'
        onClick={handleAdd}
      >
        <Tooltip content={t('common.add')}>
          <i
            className={`
                fa-solid fa-add p-2 
              text-green3
              `}
          />
        </Tooltip>
      </li>
    </ul>
  );
}

export default List;
