import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  PencilIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Batuan, Sumberdayaalam, Fosil} from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <PencilIcon {...icon} />,
        name: "Sumber Daya Alam",
        path: "/sumberdayaalam",
        element: <Sumberdayaalam />,
      },
      {
        icon: <PencilIcon {...icon} />,
        name: "Batuan",
        path: "/batuan",
        element: <Batuan />,
      },
      {
        icon: <PencilIcon {...icon} />,
        name: "Fosil",
        path: "/fosil",
        element: <Fosil/>,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
