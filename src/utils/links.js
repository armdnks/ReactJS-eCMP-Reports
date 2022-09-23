import {
  AiOutlineUser,
  AiOutlineAppstore,
  AiOutlineFile,
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
    title: "profile",
    path: "/profile",
    icon: <AiOutlineUser />,
  },
];

export default links;
