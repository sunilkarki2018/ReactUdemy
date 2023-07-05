import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import MembersPage, { loader as membersLoader } from "./pages/Members";
import EventsRootLayout from "./pages/EventsRoot";
import MembersRootLayout from "./pages/MembersRoot";
import HomePage from "./pages/Home";
import MemberPage from "./pages/Member";
import NewEventPage, { action as newEventAction } from "./pages/NewEvent";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              { path: ":edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage />, action: newEventAction },
        ],
      },

      {
        path: "members",
        element: <MembersRootLayout />,
        children: [
          { index: true, element: <MembersPage />, loader: membersLoader },
          { path: "new", element: <NewEventPage />, action: newEventAction },
        ],
      },

      { path: "members", element: <MemberPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
