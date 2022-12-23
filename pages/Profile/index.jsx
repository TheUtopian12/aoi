import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="flex h-[100vh] justify-center items-center">
      <div className="flex flex-col w-[98%] sm:w-[75%] h-[600px] bg-[#292B2F]">
        <div className="flex items-center gap-4 px-10 pt-2 sm:px-20 sm:translate-y-[-65px] ">
          <Image
            src={"/avatar.png"}
            width={100}
            height={100}
            className="group-hover:animate-bounce"
          />{" "}
          <h2 className="font-semibold text-2xl ">Perfil</h2>
        </div>

        <div className="w-[full] h-[100%] m-4 sm:m-14 rounded-2xl  bg-[#1a1b1c]">
          <span className="flex items-center gap-10 ml-4 mt-4 mr-2 sm:ml-10 sm:mt-10">
            <h2 className="font-bold text-xl sm:text-2xl">Fecha de expiracion:</h2>{" "}
            <h3 className="font-semibold text-xl sm:text-2xl">10/10/2022</h3>
          </span>
          <span className="flex items-center gap-5 sm:gap-10 ml-4 mt-4 mr-4 sm:ml-10 sm:mt-10">
            <h2 className="font-semibold text-xl sm:text-2xl">
              Desbloquear contenido adulto:
            </h2>{" "}
            <span className="rounded-full h-8 w-8 bg-red-500"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default index;
