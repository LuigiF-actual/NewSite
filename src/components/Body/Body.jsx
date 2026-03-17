import React, {useState, use, useContext} from "react";
import { PageContext } from "../Context/PageContext";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";



const Body = () => {

  const [user, setUser] = useState("Home")



  return (
    /* { <PageContext.Provider value={{ page, setPage }}> }*/
    <div className="h-screen w-screen overflow-hidden relative">
      <PageContext.Provider value={{user, setUser}}>
        <BackGround />
        <Header user={user}/>
        <div className="z-10 relative">
          <Content />
        </div>
        <h1 className="z-10 absolute text-3xl text-amber-50">Me here + {`${user}`}</h1>
      </PageContext.Provider>
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
  const { user, setUser } = useContext(PageContext);

  if (user === "Home") 
    return <Home />;
  if (user === "Projects") 
    return <Projects />;

};


