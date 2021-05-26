import {Button, IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";

import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import {useDispatch} from "react-redux";
import {openSendMessage} from "./features/counter/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
        onClick={() => dispatch(openSendMessage())}
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

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
