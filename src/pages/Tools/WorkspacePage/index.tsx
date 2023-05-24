import dayjs from 'dayjs';
import { useCallback, useEffect, useState } from 'react';

import { ToolCode } from '../../../common';
import Spinner from './Spinner';
import { WorkspaceData } from '../../../types';
import Workspace from './Workspace';

function WorkspacePage() {
  const [load, setLoad] = useState(false); // change to true!!!!
  const [menuVisible, setMenuVisible] = useState(false);

  const [data, setData] = useState<WorkspaceData>({
    lastAcess: dayjs(new Date()).format(),
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
      setData(parsed);
    }

    setTimeout(() => setLoad(false), 6000);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => saveData(), 1500);

    return () => clearTimeout(timer);
  }, [saveData]);

  return load ? <Spinner /> : (
    <Workspace menuVisible={menuVisible} onChange={handleToolChange} onMenuVisibilityChange={setMenuVisible} { ...data } />
  );
}

export default WorkspacePage;
