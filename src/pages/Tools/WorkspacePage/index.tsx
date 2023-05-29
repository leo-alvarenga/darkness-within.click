import dayjs from 'dayjs';
import { useCallback, useEffect, useState } from 'react';

import { ToolCode } from '../../../common';
import { Workspace } from '../../../components';
import Spinner from './Spinner';
import { WorkspaceData } from '../../../types';

function WorkspacePage() {
  const [load, setLoad] = useState(true); // change to true!!!!
  const [menuVisible, setMenuVisible] = useState(false);

  const [data, setData] = useState<WorkspaceData>({
    lastAcess: dayjs(new Date()).format(),
    master: 'workspace',
  });

  const handleToolChange = useCallback(
    (positision: 'master' | 'child1' | 'child2', code?: ToolCode) => {
      const cpy = data;

      switch (positision) {
        case 'master':
          cpy.master = code;

          if (!code) {
            if (cpy.child1) {
              cpy.master = cpy.child1;
              cpy.child1 = undefined;
            } else if (cpy.child2) {
              cpy.master = cpy.child2;
              cpy.child2 = undefined;
            } else {
              cpy.master = 'workspace';
            }
          }
          break;
        case 'child1':
          if (!cpy.master) cpy.master = code;
          else cpy.child1 = code;
          break;
        case 'child2':
          if (!cpy.master) cpy.master = code;
          else cpy.child2 = code;
          break;
      }

      setMenuVisible(false);
      setData({ ...cpy });
    },
    [data],
  );

  const saveData = useCallback(() => {
    try {
      localStorage.setItem('workspace', JSON.stringify(data));
    } catch (e) {
      return;
    }
  }, [data]);

  useEffect(() => {
    const workspace = localStorage.getItem('workspace');

    if (workspace) {
      const parsed = JSON.parse(workspace) as WorkspaceData;
      if (!parsed.master) parsed.master = 'workspace';

      setData(parsed);
    }

    setTimeout(() => setLoad(false), ((Math.floor(Math.random() * 10) + 2) % 7) * 1000);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => saveData(), 1500);

    return () => clearTimeout(timer);
  }, [saveData]);

  return load ? (
    <Spinner />
  ) : (
    <Workspace
      menuVisible={menuVisible}
      onChange={handleToolChange}
      onMenuVisibilityChange={setMenuVisible}
      {...data}
    />
  );
}

export default WorkspacePage;
