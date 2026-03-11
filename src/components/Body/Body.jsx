import Nav_bar from "../NavBar/NavBar";
import Header from "../Header/Header";

import Home from "../Home/Home";

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


