import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TokenContextProvider from "./Context/TokenContext";
import { MovieContextProvider } from "./Context/MovieContext";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import WatchList from "./components/WatchList/WatchList";
import Movies from "./components/Movies/Movies.jsx";
import { Toaster } from "react-hot-toast";
import Blog from "./components/blog/Blog.jsx";
import UpComingPage from "./components/UpCommingPage/UpCommingPage.jsx";
import TopRated from "./components/TopRated/TopRated.jsx";
import PopularPage from "./components/PopularPage/PopularPage.jsx";


function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Register /> },
        { path: "/", element: <Home /> },
        { path: "/movies", element: <Movies /> },
        { path: "/details/:id", element: <MovieDetails /> },
        { path: "/watchlist", element: <WatchList /> },
        { path: "/blog", element: <Blog /> },
        { path: "/upcoming", element: <UpComingPage /> },
        { path: "/topRated", element: <TopRated /> },
        { path: "/popular", element: <PopularPage /> },
      ],
    },
  ]);
  return (
    <TokenContextProvider>
      <MovieContextProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </MovieContextProvider>
    </TokenContextProvider>
  );
}

export default App;
