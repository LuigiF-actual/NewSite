import Nav_bar from "../NavBar/NavBar";

const Header = () => {

    return (
        <div className="z-10 relative h-20 flex flex-col gap-4 justify-center align-middle min-w-screen ">
            <Nav_bar />
            <div className="border-t border-orange-500 border-2 min-w-full"></div>
        </div>
    );
};

export default Header;