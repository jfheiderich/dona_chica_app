import { Page } from "framework7-react";
import React from "react";

const SplashPage = ({ f7route, f7router }: any) => {
  const pageInit = () => {
    setTimeout(() => {}, 2000);
  };
  return (
    <Page name="splash" onPageInit={pageInit}>
      <h1>hi</h1>
    </Page>
  );
};
export default SplashPage;
