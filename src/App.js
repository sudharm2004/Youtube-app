import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Videolist from "./components/Videolist";
import Watch from "./components/Watch";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <Videolist />
          </>
        ),
      },
      {
        path: "/watch",
        element: (
          <>
            <Header />
            <Watch />
          </>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
