import { Page } from "framework7-react";
import React from "react";
import "./style.scss";

const SignInPage = ({ f7route, f7router }: any) => {
  const pageInit = () => {
    setTimeout(() => {}, 2000);
  };
  return (
    <Page name="signIn" onPageInit={pageInit}>
      <h1>signIn</h1>
    </Page>
  );
};
export default SignInPage;
