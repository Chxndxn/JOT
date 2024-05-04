/* Imports */
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import { rootRoutes } from "./rootRoutes";

const routes = [...rootRoutes];

function Routing() {
  const content = useRoutes(routes);
  // ToDo: Implement fallback component
  return <Suspense fallback={<p>Loading</p>}>{content}</Suspense>;
}

export default Routing;
