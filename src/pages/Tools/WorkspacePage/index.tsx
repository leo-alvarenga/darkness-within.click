import { useCallback, useEffect, useMemo, useState } from 'react';

import { TOOL_CODENAME, WORKSPACE_INFO } from '../../../common';
import { MasterChildrenPage } from '../../../components';
import Spinner from './Spinner';
import { toolMap, WorkspaceData } from './util';
import ToolMenu from './ToolMenu';
import dayjs from 'dayjs';

function WorkspacePage() {
  const [load, setLoad] = useState(false); // change to true!!!!
  const [menuVisible, setShowMenu] = useState(false);

  const [data, setData] = useState<WorkspaceData>({
    lastAcess: dayjs(new Date()).format(),
  });

  const handleToolChange = useCallback(
    (positision: 'master' | 'child1' | 'child2', code?: TOOL_CODENAME) => {
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

      setShowMenu(false);
      setData({ ...cpy });
    },
    [data],
  );

  const workspace: JSX.Element = useMemo(() => {
    return (
      <>
        <MasterChildrenPage
          info={{
            title: WORKSPACE_INFO.name,
            path: WORKSPACE_INFO.path,
          }}
          master={data && data.master ? toolMap[data.master] : undefined}
          child1={data && data.child1 ? toolMap[data.child1] : undefined}
          child2={data && data.child2 ? toolMap[data.child2] : undefined}
          menuContent={
            <ToolMenu
              isMasterBusy={!!data?.master}
              isChild1Busy={!!data?.child1}
              isChild2Busy={!!data?.child2}
              onChange={handleToolChange}
            />
          }
          menuVisible={menuVisible}
          onMenuVisibilityChange={setShowMenu}
        />
      </>
    );
  }, [data, handleToolChange, menuVisible]);

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

  return load ? <Spinner /> : workspace;
}

export default WorkspacePage;
