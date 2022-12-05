import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications ,Batuan,Artefak,Invertebrata} from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import { GiftIcon } from "@heroicons/react/24/outline";


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
      // {
      //   icon: <BellIcon {...icon} />,
      //   name: "notifactions",
      //   path: "/notifactions",
      //   element: <Notifications />,
      // },
      {
        icon: <GiftIcon {...icon} />,
        name: "BATUAN",
        path: "/batuan",
        element: <Batuan />,
      },
        {
        icon: <GiftIcon {...icon} />,
        name: "SUMBER DAYA",
        path: "/artefak",
        element: <Artefak />,
      },
        {
        icon: <GiftIcon {...icon} />,
        name: "FOSIL",
        path: "/invertebrata",
        element: <Invertebrata />,
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
