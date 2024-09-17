import {
  BellSVG,
  CallSVG,
  CalendarSVG,
  ChatSVG,
  ElipsisSVG,
  FileSVG,
  PlusSVG,
  TeamsSVG,
  VanArsdelSVG,
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
    link: "/calls",
    section: "Calls",
    icon: CallSVG,
    text: "calls",
  },
  {
    link: "/files",
    section: "Files",
    icon: FileSVG,
    text: "files",
  },
  {
    link: "/van-arsdel",
    section: "Van Arsdel",
    icon: VanArsdelSVG,
    text: "van-arsdel",
  },
  {
    link: "/menu",
    icon: ElipsisSVG,
    text: "menu",
  },
  {
    link: "/apps",
    section: "Apps",
    icon: PlusSVG,
    text: "apps",
  },
];

export default sidebarNav;
