import React from "react";

const UserProfilePage = (props) => {
  return <div>{props.username}</div>;
};

export default UserProfilePage;
export async function getServerSideProps(context) {
  const { params, req, res } = context;
  console.log(req);
  console.log(res);
  return {
    props: {
      username: "jhjvgjk",
    },
  };
}
