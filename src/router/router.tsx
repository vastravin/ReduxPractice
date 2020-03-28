import React from "react";
import PublicRouter from "./publicRouter";
import PrivateRouter from "./privateRouter";

const AppRouter: React.FC = () => {
  return (
    <>
      <PublicRouter />
      <PrivateRouter />
    </>
  );
};

export default AppRouter;
