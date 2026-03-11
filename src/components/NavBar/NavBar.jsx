
function Nav_bar() {

  return (   
    <>
    <div className=" bg-white border-2 border-orange-500 rounded-4xl z-10  min-h-8 min-w-50 
                    flex flex-row gap-4 justify-center align-middle ">
        <ul className="font-mono">
          <li className="w-fit inline-block mx-1 p-1 px-4 rounded-3xl
                       transition delay-75 duration-200 ease-in-out hover:bg-gray-400  not-hover:bg-white">
            <button>Home</button>
          </li>
          <li className="w-fit inline-block mx-1 p-1 px-4 rounded-3xl
                       transition delay-75 duration-200 ease-in-out hover:bg-gray-400  not-hover:bg-white">
          <button>Projects</button>
          </li>
        </ul>
    </div>
    
    </>
  );
}

export default Nav_bar;