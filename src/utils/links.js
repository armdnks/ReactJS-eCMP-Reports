import {
  AiOutlineAppstore,
  AiOutlineFile,
  AiOutlineSetting,
} from "react-icons/ai";

const links = [
  {
    id: 1,
    title: "home",
    path: "/",
    icon: <AiOutlineAppstore />,
  },
  {
    id: 2,
    title: "all reports",
    path: "/all-reports",
    icon: <AiOutlineFile />,
  },
  {
    id: 3,
    title: "settings",
    path: "/settings",
    icon: <AiOutlineSetting />,
  },
];

export default links;
