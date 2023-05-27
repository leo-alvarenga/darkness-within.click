import dayjs from 'dayjs';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useClickOutside } from '../../../hooks';
import List from './List';
import TextField from '../../TextField';
import { ToDoData } from '../../../types';
import Select from '../../Select';

function ToDo() {
  const { t } = useTranslation();

  const [editTitle, setEditTitle] = useState(false);
  const titleWrapper = useRef<HTMLDivElement>(null);

  const [availableLists, setAvailableLists] = useState<string[]>([]);
  const [currList, setCurrList] = useState<string>();
  const [data, setData] = useState<ToDoData>({ title: t('page.tools.todo.newList'), tasks: [] });

  const handleTaskChange = useCallback(
    (title: string, index?: number) => {
      let cpy = data.tasks;
      const now = dayjs(new Date()).format();

      if (index === undefined) {
        if (title.length <= 0) return;

        cpy.push({
          createdIn: now,
          title,
        });

        return setData({ ...data, tasks: [...cpy] });
      }

      if (index >= cpy.length || index < 0) return;

      if (title === cpy[index].title) {
        cpy[index].finishedIn = cpy[index].finishedIn ? undefined : now;
      } else {
        cpy[index].title = title;

        if (title.length < 1) {
          cpy = cpy.slice(0, index).concat(cpy.slice(index + 1, cpy.length));
        }
      }

      return setData({ ...data, tasks: [...cpy] });
    },
    [data],
  );

  const handleTitleChange = useCallback(
    (newTitle: string) => {
      if (newTitle === data.title) return;
      if (availableLists.filter((t) => t === newTitle).length > 0) {
        setEditTitle(false);
        // todo: notify about the error

        return;
      }

      const availableAfter = availableLists.filter((t) => t !== newTitle);
      availableAfter.push(newTitle);

      try {
        localStorage.removeItem(data.title);
        setData({ ...data, title: newTitle });

        localStorage.setItem('todo', JSON.stringify(availableAfter));
      } catch (e) {
        console.error('Unable to persist data from todo lists');
      }
    },
    [availableLists, data],
  );

  const persistData = useCallback((newData: ToDoData) => {
    try {
      localStorage.setItem(newData.title, JSON.stringify(newData));
    } catch (e) {
      return;
    }
  }, []);

  const retrieveData = useCallback(() => {
    const data = localStorage.getItem('todo');

    if (!data) return;

    try {
      const parsed = JSON.parse(data) as string[];
      setAvailableLists(parsed);

      if (parsed && parsed.length > 0) {
        setCurrList(parsed[0]);

        const list = localStorage.getItem(parsed[0]);

        if (!list) return;

        try {
          const parsed = JSON.parse(list) as ToDoData;
          setData(parsed);
        } catch (e) {
          return;
        }
      }
    } catch (e) {
      console.error('Unable to retrieve available lists');
    }
  }, []);

  useClickOutside(titleWrapper, () => setEditTitle(false), '');

  useEffect(() => {
    const timer = setTimeout(() => persistData(data), 2000);

    return () => clearTimeout(timer);
  }, [data, persistData]);

  useEffect(() => {
    retrieveData();
  }, [retrieveData]);

  return (
    <div className='flex flex-col items-center w-full overflow-x-hidden overflow-y-auto gap-2'>
      <h1 className='text-4xl max-lg:text-xl mb-8 border-b-2 border-b-foreground'>
        {t('page.tools.todo.title')}
      </h1>

      <Select
        name='list-selector'
        data={availableLists}
        value={currList || ''}
        onChange={setCurrList}
      />

      {editTitle ? (
        <div ref={titleWrapper}>
          <TextField
            keys={['enter', 'escape']}
            value={data.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            onKeyCapture={() => setEditTitle(false)}
          />
        </div>
      ) : (
        <h1 onClick={() => setEditTitle(true)} className='text-2xl max-lg:text-lg cursor-text'>
          {data.title} <i className='text-lg fa-solid fa-pen-to-square' />
        </h1>
      )}

      <List tasks={data.tasks} onChange={handleTaskChange} />

      <section
        id='details'
        className='bg-background rounded-lg p-4 gap-4 flex flex-col items-center'
      >
        <div className='bg-black2 w-full p-2 rounded-lg flex flex-col gap-2'>
          <h3 className='text-xl font-bold max-lg:text-lg mb-2'>
            {t('page.tools.todo.usage.title')}
          </h3>
          <span>1. {t('page.tools.todo.usage.description.1')}</span>
          <span>2. {t('page.tools.todo.usage.description.2')}</span>
          <span>3. {t('page.tools.todo.usage.description.3')}</span>
          <span>4. {t('page.tools.todo.usage.description.4')}</span>
        </div>

        <div className='bg-black2 p-2 rounded-lg'>
          <h3 className='text-xl font-bold max-lg:text-lg mb-2'>{t('common.moreInfo')}</h3>
          <span>{t('page.tools.todo.usage.description.more')}</span>
        </div>
      </section>
    </div>
  );
}

export default ToDo;
