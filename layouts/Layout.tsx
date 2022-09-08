import React, { FC, PropsWithChildren } from "react";
import Toast from "../components/utilities/Toast";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Toast />
    </>
  );
};

export default Layout;
