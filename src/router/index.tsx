import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CSSGeneratorPage, HomePage, UnderConstructionPage } from "~/pages";
import { PagePath } from "~/types";

export interface RoutesProps { }

function Routes({ }: RoutesProps) {

  const routeObject = [
    {
      path: PagePath.Home,
      element: <HomePage />
    },
    {
      path: PagePath.CSSGenerator,
      element: <CSSGeneratorPage />
    },
    {
      path: PagePath.CodeSnack,
      element: <UnderConstructionPage />
    }
  ]

  const router = createBrowserRouter(routeObject)

  return <RouterProvider router={router} />
}

export { Routes };
