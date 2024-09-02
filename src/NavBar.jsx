import Link from "./Link.jsx";

function NavBar() {
  return (
    <>
      <nav className="flex justify-around p-4 bg-gray-800 text-white space-x-8">
        <Link
          to="/home"
          className="text-white no-underline text-lg hover:text-gray-300"
          activeClassName="font-bold border-b-2 border-white"
        >
          Home
        </Link>
        <Link
          to="/blog"
          className="text-white no-underline text-lg hover:text-gray-300"
          activeClassName="font-bold border-b-2 border-white"
        >
          Blog
        </Link>
        <Link
          to="/about"
          className="text-white no-underline text-lg hover:text-gray-300"
          activeClassName="font-bold border-b-2 border-white"
        >
          About
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
