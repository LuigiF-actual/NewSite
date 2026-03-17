import { useContext } from "react";
import { PageContext } from "../Context/PageContext";

function Nav_bar() {  

  const { user, setUser } = useContext(PageContext);

  function handleClick(Word)
  {
    setUser(Word)
  }

  return (   
    <>
    <div className=" bg-white border-2 border-orange-500 rounded-4xl z-10  min-h-8 min-w-50 
                      flex flex-row gap-4 justify-center align-middle ">
        <ul className="font-mono">
          <li className="inline-block">
            <button className="nav-bar-btn" onClick={() => handleClick("Home")}>
                       Home
            </button>
          </li>
          <li className="inline-block">
            <button className="nav-bar-btn" onClick={() => handleClick("Projects")}>
                    Projects
            </button>
          </li>
        </ul>
    </div>
    
    </>
  );
}

export default Nav_bar;