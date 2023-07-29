import React from "react";
import { Page } from "framework7-react";
import "./style.scss";

const SignUpPage = ({ f7route, f7router }: any) => {
  const pageInit = () => {
    setTimeout(() => {}, 2000);
  };
  return (
    <Page name="signUp" onPageInit={pageInit}>
      <h1>signUp</h1>
    </Page>
  );
};
export default SignUpPage;
