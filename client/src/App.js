import React from "react";
import Navbar from "./components/components/Navbar";
import Footer from "./components/components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ErrorPage from "./components/pages/ErrorPage";
import Partners from "./components/pages/Partners";
import Blog from "./components/pages/Blog";
import Join from "./components/pages/Join";
import Team2023 from "./components/pages/Team2023";
import Team2022 from "./components/pages/Team2022";
import Edizione2022 from "./components/pages/Edizione2022";
import BlogPost from "./components/pages/BlogPost";

import Write from "./components/pages/Write";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Login from "./components/pages/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Navbar />
				<Outlet />
				<Footer />
			</>
		),
		errorElement: (
			<>
				<Navbar />
				<ErrorPage />
				<Footer />
			</>
		),
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/tedxsapienzau",
				element: <Home />,
			},
			{
				path: "/partners",
				element: <Partners />,
			},
			{
				path: "/blog",
				element: <Blog />,
			},
			{
				path: "/post/:id",
				element: <BlogPost />,
			},
			{
				path: "/join",
				element: <Join />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/team2022",
				element: <Team2022 />,
			},
			{
				path: "/team2023",
				element: <Team2023 />,
			},
			{
				path: "/edizione2022",
				element: <Edizione2022 />,
			},
			{
				path: "/write",
				element: <Write />,
			},
			{
				path: "/login",
				element: <Login />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
