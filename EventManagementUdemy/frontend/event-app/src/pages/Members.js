import { useLoaderData, json } from "react-router-dom";
import MembersList from "../components/MembersList";

function MembersPage() {
  const members = useLoaderData();
  return <MembersList members={members} />;
}

export default MembersPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // ...
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
