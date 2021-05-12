import {Button} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
      >
        Compose
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        number={54}
        title="Inbox"
        selected={true}
      />
      <SidebarOption Icon={StarIcon} number={28} title="Starred" />
      <SidebarOption Icon={AccessTimeIcon} number={4} title="Snoozed" />
      <SidebarOption Icon={LabelImportantIcon} number={15} title="Important" />
      <SidebarOption Icon={NearMeIcon} number={9} title="Starred" />
      <SidebarOption Icon={NoteIcon} number={28} title="Drafts" />
      <SidebarOption Icon={ExpandMoreIcon} number={28} title="More" />
    </div>
  );
}

export default Sidebar;
