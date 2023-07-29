import { Page } from "framework7-react";
import React from "react";
import "./style.scss";

const HomePage = ({ f7route, f7router }: any) => {
  const pageInit = () => {
    setTimeout(() => {}, 2000);
  };
  return (
    <Page name="home" onPageInit={pageInit}>
      <h1>home</h1>
    </Page>
  );
};
export default HomePage;
