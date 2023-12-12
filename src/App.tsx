import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

import Layout from "./components/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div className="flex flex-col h-[calc(100vh-69px)] justify-center items-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-2xl text-gray-600">Page Not Found</p>
      <p className="text-lg text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="mt-4 inline-block bg-blue-600 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full"
      >
        Go Home
      </a>
    </div>
  );
}
