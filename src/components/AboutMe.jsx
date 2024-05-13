const AboutMe = () => {
  return (
    <>
      {" "}
      <div className="bg-celeste_oscuro/50 ">
        <div className="container m-auto">
          <div className="h-[calc(100vh-10rem)] justify-center gap-10 flex flex-col sm:flex-row  items-center">
            <div className="flex justify-around h-full items-center">
              <h2 className="font-semibold text-6xl font-quicksand">
                &lt;Sobre mí /&gt;
              </h2>
              <p className="text-2xl w-1/3 font-semibold font-quicksand">
                Soy Nico Rolón, amante de la programación y la tecnología. En
                constante aprendizaje. Desde el momento que escribi mi primer
                Console.log("Hello world") supe que quiero hacer esto el resto
                de mi vida. Futuro Analista programador.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
