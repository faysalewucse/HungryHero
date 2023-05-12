import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Main from "./components/Main";
import Home from "./pages/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
