import { Page } from "framework7-react";
import React from "react";
import "./style.scss";

const SplashPage = ({ f7route, f7router }: any) => {
  const pageInit = () => {
    setTimeout(() => {}, 2000);
  };
  return (
    <Page name="splash" onPageInit={pageInit}>
      <h1>splash</h1>
    </Page>
  );
};
export default SplashPage;
