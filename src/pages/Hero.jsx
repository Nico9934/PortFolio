import Logo from "../components/Logo";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-5rem)] m-auto ">
      <div className="container m-auto">
        <div className="h-[calc(100vh-5rem)] justify-center gap-10 flex flex-col sm:flex-row  items-center">
          <div className="sm:hidden">
            <Logo />
          </div>

          <div className="max-w-2xl sm:ml-16 flex flex-col justify-center sm:justify-start sm:items-start gap-5">
            <h2 className="text-4xl sm:text-7xl font-semibold font-quicksand">
              &lt;Full stack Developer /&gt;
            </h2>
            <p className="text-3xl sm:text-4xl font-semibold font-quicksand">
              MERN Stack
            </p>
          </div>
          <img
            className="w-10/12 h-auto sm:w-96  rounded-full border-4 border-cyan-600 object-cover "
            src="https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1576497684/content-items/003/518/361/Catriel-57-original.jpg?1576497684"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
