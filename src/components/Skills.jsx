const Skills = () => {
  return (
    <>
      {" "}
      <div className="bg-teal-950 ">
        <div className="container m-auto">
          <div className="h-[calc(100vh-10rem)] text-cyan-200/85 justify-around gap-10 flex flex-col sm:flex-row  items-center">
            <div className="flex gap-5 flex-wrap w-1/3">
              <img
                className="w-24 h-24"
                src="public\skills\Csharp.svg"
                alt=""
              />
              <img
                className="w-24 h-24"
                src="public\skills\express.svg"
                alt=""
              />
              <img className="w-24 h-24" src="public\skills\flask.svg" alt="" />
              <img className="w-24 h-24" src="public\skills\js.svg" alt="" />
              <img
                className="w-24 h-24"
                src="public\skills\nodejs.svg"
                alt=""
              />
              <img
                className="w-24 h-24"
                src="public\skills\python.svg"
                alt=""
              />
              <img className="w-24 h-24" src="public\skills\react.svg" alt="" />
              <img
                className="w-24 h-24"
                src="public\skills\tailwind.svg"
                alt=""
              />
            </div>

            <div className="flex flex-col gap-5 bg-red-500 w-1/3 items-center">
              <h2 className="font-semibold text-6xl font-quicksand">
                &lt;Tecnologías /&gt;
              </h2>
              <p className="text-md font-semibold font-quicksand">
                Mi stack favorito es MERN, pero también programo en C# y Python.
                Estoy dispuesto, y es algo que me encantaría, a aprender nuevas
                tecnologías. No dudo que puedo sumar valor humano como
                profesional a un equipo de trabajo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
