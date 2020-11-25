import React from "react";
import { ROUTES_PATH, ROUTES_LABEL } from "./constants";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";

import { Articles } from "../containers/Articles/containers";
import { Article } from "../containers/Articles/components";
import {
  SignIn,
  SignUp,
  ResetPassword,
  AccountActivation,
  LinkSend,
  ForgotPassword,
  AccountLinkSend,
  ForgotPassLinkSend,
} from "../containers/Auth/component";

export const privateRouter = (userRole) =>
  [
    {
      path: ROUTES_PATH.ARTICLES,
      exact: true,
      component: Articles,
      accessLevel: [],
      children: [
        {
          path: "/:id",
          exact: true,
          component: Article,
          accessLevel: [],
          children: [],
          label: ROUTES_LABEL.ARTICLE,
          icon: <FolderSpecialIcon />,
        },
      ],
      label: ROUTES_LABEL.ARTICLES,
      icon: null,
    },
    {
      path: ROUTES_PATH.USER,
      exact: true,
      component: () => <div>User</div>,
      accessLevel: [],
      children: [],
      label: ROUTES_LABEL.USER,
      icon: <SettingsApplicationsIcon />,
    },
  ].filter((route) => (userRole ? route.accessLevel.includes(userRole) : true));

export const publicRouter = [
  {
    path: ROUTES_PATH.SIGN_IN,
    exact: true,
    component: SignIn,
    children: [],
  },
  {
    path: ROUTES_PATH.SIGN_UP,
    exact: true,
    component: SignUp,
    children: [],
  },
  {
    path: `${ROUTES_PATH.RESET}/:token`,
    exact: true,
    component: ResetPassword,
    children: [],
  },
  {
    path: ROUTES_PATH.FORGOT,
    exact: true,
    component: ForgotPassword,
    children: [],
  },
  {
    path: `${ROUTES_PATH.ACTIVATION}/:token`,
    exact: true,
    component: AccountActivation,
    children: [],
  },
  {
    path: ROUTES_PATH.ACCOUNT_LINK_SEND,
    exact: true,
    component: AccountLinkSend,
    children: [],
  },
  {
    path: ROUTES_PATH.FORGOT_PASS_LINK_SEND,
    exact: true,
    component: ForgotPassLinkSend,
    children: [],
  },
];
