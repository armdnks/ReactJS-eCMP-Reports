import { AiOutlineAppstore, AiOutlineFile, AiOutlineSetting } from "react-icons/ai";

const links = [
  {
    id: 1,
    title: "home",
    path: "/",
    icon: <AiOutlineAppstore />,
  },
  // {
  //   id: 2,
  //   title: "add report",
  //   path: "/add-report",
  //   icon: <AiOutlineAppstore />,
  // },
  {
    id: 3,
    title: "all reports",
    path: "/all-reports",
    icon: <AiOutlineFile />,
  },
  {
    id: 4,
    title: "settings",
    path: "/settings",
    icon: <AiOutlineSetting />,
  },
];

export default links;
