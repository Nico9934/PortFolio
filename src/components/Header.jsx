const Header = () => {
  return (
    <>
      <header className="hidden sm:flex">
        <div className="w-full bg-gray-300">
          <div className="container flex justify-around p-5 font-quicksand">
            <div className="flex flex-col font-semibold text-gray-500">
              {"<NR />"} <span className="font-light">FullStack Developer</span>
            </div>
            <div className="flex justify-around items-center gap-10">
              <a
                className="text-gray-500 hover:text-grisOscuro transition-all duration-100"
                href="#"
              >
                Sobre mi
              </a>
              <a
                className="text-gray-500 hover:text-grisOscuro transition-all duration-100"
                href="#"
              >
                Proyectos
              </a>
              <a
                className="text-gray-500 hover:text-grisOscuro transition-all duration-100"
                href="#"
              >
                Tecnologias
              </a>
              <a
                className="text-gray-500 hover:text-grisOscuro transition-all duration-100"
                href="#"
              >
                Contactame
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
