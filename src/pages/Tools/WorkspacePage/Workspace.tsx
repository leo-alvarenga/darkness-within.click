import { ToolCode, WORKSPACE_INFO } from "../../../common";
import { MasterChildrenPage } from "../../../components";
import ToolMenu from "./ToolMenu";
import { toolMap } from "./util";
import { WorkspaceData } from "../../../types";

export interface WorkspaceProps extends WorkspaceData {
  menuVisible: boolean;
  onMenuVisibilityChange: (value: boolean) => void
  onChange: (positision: "master" | "child1" | "child2", code?: ToolCode ) => void;
}

function Workspace({ child1, child2, master, menuVisible, onMenuVisibilityChange, onChange }: WorkspaceProps) {
  
  return (
    <MasterChildrenPage
      info={{
        title: WORKSPACE_INFO.name,
        path: WORKSPACE_INFO.path,
      }}
      master={master ? toolMap[master] : undefined}
      child1={child1 ? toolMap[child1] : undefined}
      child2={child2 ? toolMap[child2] : undefined}
      menuContent={
        <ToolMenu
          isMasterBusy={!!master}
          isChild1Busy={!!child1}
          isChild2Busy={!!child2}
          onChange={onChange}
        />
      }
      menuVisible={menuVisible}
      onMenuVisibilityChange={onMenuVisibilityChange}
    />
  );
}

export default Workspace;
