import { Outlet } from "react-router-dom";
import MembersNavigation from "../components/MembersNavigation";

function MembersRootLayout() {
  return (
    <>
      <MembersNavigation />
      <Outlet />
    </>
  );
}

export default MembersRootLayout;
