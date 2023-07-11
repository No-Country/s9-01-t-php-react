import { Link } from "react-router-dom";
import { CertificateIcon, HomeIcon, ProfileIcon, StarIcon } from "../Icons/Icons";

const Navbar = () => {
  return (
    <nav className="max-w-[360px] w-full h-10 flex justify-between items-center px-10">
      <Link to="/">
        <HomeIcon />
      </Link>
      <Link to="/dashboard">
        <CertificateIcon />
      </Link>
      <Link>
        <StarIcon />
      </Link>
      <Link to="/profile">
        <ProfileIcon />
      </Link>
    </nav>
  );
};

export default Navbar;
