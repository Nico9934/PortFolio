const AboutMe = () => {
  return (
    <>
      {" "}
      <div className="bg-celeste_oscuro ">
        <div className="container m-auto">
          <div className="h-[calc(100vh-18rem)] justify-center gap-10 flex flex-col sm:flex-row  items-center">
            <div className="flex justify-between h-full items-center">
              <h2 className="font-semibold text-6xl font-quicksand">
                &lt;Sobre mí /&gt;
              </h2>
              <p className="text-4xl w-1/2 font-semibold font-quicksand">
                Soy Nico Rolón, amante de la programación y la tecnología. En
                constante aprendizaje. Futuro Analista programador.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
