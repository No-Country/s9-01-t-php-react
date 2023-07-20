import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="h-[196px] w-full">
      <div className="h-full w-full flex bg-primary px-[78px] text-white">
        <div className="w-1/2 h-full flex gap-[80px] justify-start items-start pt-[30px]">
          <article className="flex flex-col gap-2">
            <h3 className="font-medium text-base">Plantillas</h3>
            <p className="font-normal text-xs leading-[15px]">Eduación</p>
            <p className="font-normal text-xs leading-[15px]">Profesional</p>
            <p className="font-normal text-xs leading-[15px]">Desarrollo personal</p>
          </article>
          <article className="flex flex-col gap-2">
            <h3 className="font-medium text-base">Planes</h3>
            <p className="font-normal text-xs leading-[15px]">Eduación</p>
            <p className="font-normal text-xs leading-[15px]">Profesional</p>
            <p className="font-normal text-xs leading-[15px]">Desarrollo personal</p>
          </article>
          <article className="flex flex-col gap-2">
            <h3 className="font-medium text-base">Soporte</h3>
            <p className="font-normal text-xs leading-[15px]">Preguntas frecuentes</p>
            <p className="font-normal text-xs leading-[15px]">Contacto</p>
          </article>
        </div>
        <div className="w-1/2 h-full pr-[80px] flex flex-col justify-start pt-[30px] items-end gap-6">
          <p className="font-normal text-xl leading-6">Enterate de todas nuestras novedades en:</p>
          <div className="flex gap-5 justify-between items-center">
            <AiOutlineInstagram className="w-10 h-10 cursor-pointer" />
            <FaFacebookF className="w-8 h-8 cursor-pointer" />
            <BsTwitter className="w-8 h-8 cursor-pointer" />
            <FaLinkedin className="w-8 h-8 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="w-full h-[44px] pl-[80px] flex justify-start items-center gap-5 bg-grey text-white">
        <BiCopyright className="w-6 h-6" />
        <p className="font-normal text-base">iCertify, 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
