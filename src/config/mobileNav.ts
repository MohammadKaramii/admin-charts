import {
  BellSVG,
  CalendarSVG,
  ChatSVG,
  ElipsisSVG,
  TeamsSVG,
} from "../assets/svgs";

const sidebarNav = [
  {
    link: "/activity",
    section: "Activity",
    icon: BellSVG,
    text: "activity",
  },
  {
    link: "/chat",
    section: "Chat",
    icon: ChatSVG,
    text: "chat",
  },
  {
    link: "/teams",
    section: "Teams",
    icon: TeamsSVG,
    text: "teams",
  },
  {
    link: "/calendar",
    section: "Calendar",
    icon: CalendarSVG,
    text: "calendar",
  },
  {
    link: "/more",
    section: "more",
    icon: ElipsisSVG,
    text: "more",
  },
];

export default sidebarNav;
