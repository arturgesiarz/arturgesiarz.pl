import { Link } from "react-scroll";

const NavLink = ({ href, title, navbarOpen, setNavbarOpen }) => {
    const handleClick = () => {
        if (setNavbarOpen != null &&  navbarOpen == true) {
            setNavbarOpen(false);
        }
    };
    return (
        <Link
            activeClass="active"
            to={href}
            spy={true}
            smooth={true}
            offset={-140} // opcjonalne przesunięcie, jeśli masz stałą nawigację górną
            duration={500}
            onSetInactive={handleClick}
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:bg-transparent  md:p-0 hover:text-white "
            aria-current="page">
            {title}
        </Link>
    );
};

export default NavLink;