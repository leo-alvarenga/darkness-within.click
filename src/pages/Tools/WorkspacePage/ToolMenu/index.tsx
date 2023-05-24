import { useState } from 'react';
import { TOOL_CODENAME, ToolInfo } from '../../../../common';
import ToolList from './ToolList';
import PlacementView from './PlacementView';

export interface ToolMenuProps {
  isMasterBusy?: boolean;
  isChild1Busy?: boolean;
  isChild2Busy?: boolean;

  onChange: (positision: 'master' | 'child1' | 'child2', code?: TOOL_CODENAME) => void;
}

function ToolMenu(props: ToolMenuProps) {
  const [selectedApp, setSelectedApp] = useState<ToolInfo>();

  return selectedApp ? (
    <PlacementView {...props} selectedApp={selectedApp} />
  ) : (
    <ToolList onSelection={setSelectedApp} />
  );
}

export default ToolMenu;
