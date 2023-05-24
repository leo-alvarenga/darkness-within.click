import { useState } from 'react';
import { ToolCode, ToolInfo } from '../../../../common';
import ToolList from './ToolList';
import PlacementView from './PlacementView';

export interface ToolMenuProps {
  isMasterBusy?: boolean;
  isChild1Busy?: boolean;
  isChild2Busy?: boolean;

  onChange: (positision: 'master' | 'child1' | 'child2', code?: ToolCode) => void;
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
