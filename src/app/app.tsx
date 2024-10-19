import React, { FunctionComponent } from 'react'
import {RouterProvider} from "react-router-dom";
import router from "src/app/routes";

export const App: FunctionComponent = () => (
  <RouterProvider router={router} />
)
