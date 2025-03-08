import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <header className="w-screen border-b-2 border-b-[#f5f5f5]">
      <nav className="container flex justify-between py-6 ">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-[60px] h-[60px]" />
        </Link>
        <ul className="flex gap-6 items-center">
          <li>
            <a className="cursor-pointer py-0.5">Create Article</a>
          </li>
          <li className="flex gap-3 items-center">
            <button
              className="bg-[#e5e5e5] text-gray-950 px-3 py-0.5 rounded-lg hover:bg-[#ccc] transition cursor-pointer"
              onClick={handleSignInClick}
            >
              Sign in
            </button>
            <button
              className="bg-gray-700 px-3 py-0.5 rounded-lg cursor-pointer hover:bg-gray-800 transition"
              onClick={handleRegisterClick}
            >
              Register
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
