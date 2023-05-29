import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CSSGeneratorPage } from "~/pages";

export interface RoutesProps { }

function Routes({ }: RoutesProps) {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <CSSGeneratorPage />
    }
  ])

  return <RouterProvider router={router} />
}

export { Routes };
