import PongGamePNG from "/image/Project/PongTest.png"


const Projects = () => {

    return (
        <>
            <div className=" flex justify-center gap-10">
                <FirstColunm />
                <SecondColunm />
            </div>
        </>
    )

}

export default Projects;

const FirstColunm = () => {

    return (
        <div className="flex flex-col gap-10">
            <ProjectShowCase Name={"Pong Game C++"} />
            <div className="BoxOfText">
                <h1 className=" text-3xl"> AAAAAAAAAAAAA</h1>
            </div>
            <div className="BoxOfText">
                <h1 className=" text-3xl"> AAAAAAAAAAAAA</h1>
            </div>
        </div>
    )
}

const SecondColunm = () => {

    return (
        <div className="flex flex-col gap-10">
            <div className="BoxOfText">
                <h1 className=" text-3xl"> AAAAAAAAAAAAA</h1>
            </div>
            <div className="BoxOfText">
                <h1 className=" text-3xl"> AAAAAAAAAAAAA</h1>
            </div>
            <div className="BoxOfText">
                <h1 className=" text-3xl"> AAAAAAAAAAAAA</h1>
            </div>
        </div>
    )
}

const ProjectShowCase = ({ Name, Picture }) => {

    return (
        <div className="BoxOfText text-white p-5 pt-2">
            <div className=" flex justify-center align-middle flex-col gap-2">
                <h1 className=" text-3xl text-center">{Name}</h1>
                <a className="block  hover:scale-105 transition-transform delay-75 ease-out max-w-100">
                    <img className="border-amber-50/25 border-4 rounded-3xl  w-full" src={PongGamePNG} />
                </a>
            </div>
        </div>


    )

}