import Nav_bar from "../NavBar/NavBar";
import Header from "../Header/Header";

import PythonLogo from "/image/pythonLogo.svg"
import MySqlLogo from "/image/mysqlLogo.svg"
import CppLogo from "/image/c++Logo.svg"
import JSlogo from "/image/javascriptLogo.svg"
import NumpyLogo from "/image/numpy.svg"
import UbuntuLogo from "/image/ubuntuLogo.svg"

const Body = () => {

  return (
    /* { <PageContext.Provider value={{ page, setPage }}> }*/
    <div className="h-screen w-screen overflow-hidden relative">
      <BackGround />
      <Header />
      <Content />
    </div>
    /* </PageContext.Provider> */
  )
}

export default Body;

const BackGround = () => {
  return (
    <>
      <div className="absolute inset-0 bg-[url('/image/BackGround.png')] max-h-screen bg-cover bg-fixed blur-xs z-0"></div>
      <div className="absolute inset-0 h- border-l-2 border-r-2 blur-3xl bg-white opacity-5 border-slate-800 ml-50 mr-50"></div>
    </>
  );
};

const Content = () => {
 /*  const { page } = useContext(PageContext); */

  /* if (page === "home") */ return <Home />;
  /* if (page === "Projects") return <Projects />; */

};


const Home = () => {

  return (

    <div className="z-10 grid grid-cols-6 grid-rows-6 gap-2 min-w-screen border-2 border-amber-50 ">
      <Title />
      <Description />
      <Technologies />
      <ContactMe />
    </div>

  )

}

const Selector = () => {

  return (

    <div className=" col-start-4 col-span-2 row-start-1 row-span-2 BoxOfText">
      <section className=" text-white font-[Roboto] p-4">
        <h1 className=" text-3xl font-extrabold">
          About me:
        </h1>
        <div className="border-t border-orange-500 my-1 border-2 min-w-full"></div>
        <ul className=" mt-5 text-xl">
          <li> - 20-year-old Systems Administration student (ASIX) </li>
          <li> - Fluent in 4 languages </li>
          <li> - Experience with web-based projects </li>
          <li> - Python (Pandas, NumPy), C++, MySQL </li>
        </ul>
      </section>
    </div>

  );

};

const Title = () => {
  return (
    <div className="relative col-start-2 col-span-2 row-span-1 row-start-1 BoxOfText font-[Roboto]">
      <div className="p-4">
        <h1 className="font-extrabold text-white text-4xl text-nowrap">
          Luigi Frondana
        </h1>
        <h1 className="font-extrabold text-white text-3xl underline decoration-orange-500 mt-4">
          Web developer
        </h1>
      </div>
    </div>
  );
};

const Description = () => {

  return (

    <div className="relative col-start-4 col-span-2 row-start-1 row-span-2">
      <div className="relative BoxOfText">
      <section className=" text-white font-[Roboto] p-4">
        <h1 className=" text-3xl font-extrabold">
          About me:
        </h1>
        <div className="border-t border-orange-500 my-1 border-2 min-w-full"></div>
        <ul className=" mt-5 text-xl">
          <li> - 20-year-old Systems Administration student (ASIX) </li>
          <li> - Fluent in 4 languages </li>
          <li> - Experience with web-based projects </li>
          <li> - Python (Pandas, NumPy), C++, MySQL </li>
        </ul>
      </section>
      </div>
    </div>

  );

}

const ContactMe = () => {
  return (
    <div className="col-start-2 row-span-1 row-start-4 col-span-2 BoxOfText">
        <h1 className=" text-white text-3xl p-4">
          Contact me:
        </h1>
        <div className="border-t border-orange-500 my-1 border-2 min-w-full"></div>
    </div>
  );
}

const Technologies = () => {
  return (
    <div className="col-start-2 col-span-2 row-start-2 row-span-2 BoxOfText font-[Roboto]" >
      <section className="flex flex-col justify-center items-center text-white text-3xl">

        <h1 className="font-extrabold  mt-2 tracking-tight">
          Tools & Technologies
        </h1>
        <div className="border-t border-orange-500 my-1 border-2 min-w-full"></div>

      </section>

      <section className=" flex flex-wrap justify-center mt-3">

        <div className="w-20 h-20 flex items-center justify-center">
          <img src={PythonLogo} className="w-full h-full object-contain scale-100" alt="Python" />
        </div>

        <div className="w-20 h-20 flex items-center justify-center">
          <img src={MySqlLogo} className="w-full h-full object-contain scale-125" alt="MySQL" />
        </div>

        <div className="w-20 h-20 flex items-center justify-center">
          <img src={CppLogo} className="w-full h-full object-contain scale-150" alt="C++" />
        </div>

        <div className="w-20 h-20 flex items-center justify-center">
          <img src={JSlogo} className="w-full h-full object-contain scale-95" alt="JS" />
        </div>

        <div className="w-20 h-20 flex items-center justify-center">
          <img src={NumpyLogo} className="w-full h-full object-contain scale-95" alt="JS" />
        </div>

        <div className="w-20 h-20 flex items-center justify-center">
          <img src={UbuntuLogo} className="w-full h-full object-contain scale-85" alt="JS" />
        </div>

      </section>
    </div>
  );
};