import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Header from "./components/Layout/Header";
import Projects from "./components/reusable/Projects";
import Inbox from "./components/reusable/Inbox";
import Week from "./components/reusable/Week";
import Today from "./components/reusable/Today";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <>
            <Header />
          </>
        }
      >
        <Route index path="inbox" element={<Inbox />} />
        <Route path="projects" element={<Projects />} />
        <Route path="today" element={<Today />} />
        <Route path="week" element={<Week />} />
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
