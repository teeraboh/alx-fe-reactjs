// import React from "react";
// import UserDetails from "./UserDetails";

// const ProfilePage = () => {
//   return (
//     <div>
//       <h1>Profile Page</h1>
//       <UserDetails />
//     </div>
//   );
// };

// export default ProfilePage;



import UserInfo from './UserInfo';

function ProfilePage({ userData }) {
  return <UserInfo userData={userData} />;
}

export default ProfilePage;