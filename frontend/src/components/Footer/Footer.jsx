// import { Facebook, Instagram, Linkedin, Twitter } from "../Icons/Icons";

const Footer = () => {
  return (
    <footer className="h-[272px] w-full bg-[#646464] text-white">
      <div className="w-full h-[200px] flex justify-center items-center">
        <div className="w-1/2 h-full  pt-[35px] pl-[55px] flex gap-[44px] justify-start items-start">
          <article className="flex flex-col gap-2">
            <h3 className="font-normal text-xl leading-6">Plantillas</h3>
            <p className="font-normal text-sm leading-6">Eduación</p>
            <p className="font-normal text-sm leading-6">Profesional</p>
            <p className="font-normal text-sm leading-6">Desarrollo personal</p>
          </article>
          <article className="flex flex-col gap-2">
            <h3 className="font-normal text-xl leading-6">Planes</h3>
            <p className="font-normal text-sm leading-6">Eduación</p>
            <p className="font-normal text-sm leading-6">Profesional</p>
            <p className="font-normal text-sm leading-6">Desarrollo personal</p>
          </article>
          <article className="flex flex-col gap-2">
            <h3 className="font-normal text-xl leading-6">Soporte</h3>
            <p className="font-normal text-sm leading-6">Preguntas frecuentes</p>
            <p className="font-normal text-sm leading-6">Contacto</p>
          </article>
        </div>
        <div className="w-1/2 h-full pr-[80px] flex justify-end items-end">
          <div className="flex gap-6"></div>
        </div>
      </div>
      <div className="w-full h-[72px] pl-[50px] flex justify-start items-center">
        <p className="font-normal text-base leading-6">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </footer>
  );
};

export default Footer;
