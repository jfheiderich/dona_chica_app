import { Page } from "framework7-react";
import React from "react";
import "./style.scss";

const ProfilePage = ({ f7route, f7router }: any) => {
  const pageInit = () => {
    setTimeout(() => {}, 2000);
  };
  return (
    <Page name="profile" onPageInit={pageInit}>
      <h1>profile</h1>
    </Page>
  );
};
export default ProfilePage;
