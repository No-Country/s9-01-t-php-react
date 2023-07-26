import { BiCopyright } from "react-icons/bi";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import linkedin from "../../assets/icons/linkedin.svg";

import { useSelector } from "react-redux";

const Footer = () => {
  const { footer: footerLang } = useSelector(state => state.lang);
  const { templates, plans, support, news, copyright } = footerLang;

  return (
    <footer className="lg:h-[196px] w-full">
      <div className="h-full w-full flex flex-col md:flex-row px-1 md:px-[20px] lg:px-[78px] text-white bg-primary pb-[30px]">
        <div className="md:w-1/2 w-full h-full flex gap-5 md:gap-[30px] lg:gap-[80px] justify-center  md:justify-start items-start pt-[30px]">
          <article className="flex flex-col gap-2 ">
            <h3 className="font-semibold text-base">{templates.heading}</h3>
            <p className="font-normal text-xs leading-[15px]">{templates.options.option1}</p>
            <p className="font-normal text-xs leading-[15px]">{templates.options.option2}</p>
            <p className="font-normal text-xs leading-[15px]">{templates.options.option3}</p>
          </article>
          <article className="flex flex-col gap-2">
            <h3 className="font-semibold text-base">{plans.heading}</h3>
            <p className="font-normal text-xs leading-[15px]">{plans.options.option1}</p>
            <p className="font-normal text-xs leading-[15px]">{plans.options.option2}</p>
            <p className="font-normal text-xs leading-[15px]">{plans.options.option3}</p>
          </article>
          <article className="flex flex-col gap-2">
            <h3 className="font-semibold text-base">{support.heading}</h3>
            <p className="font-normal text-xs leading-[15px]">{support.options.option1}</p>
            <p className="font-normal text-xs leading-[15px]">{support.options.option2}</p>
          </article>
        </div>
        <div className="md:w-1/2 w-full h-full flex flex-col md:justify-start pt-[30px] md:items-end gap-6 justify-center items-center">
          <p className="text-base md:font-normal md:text-xl md:leading-6">{news}</p>
          <div className="flex gap-5 justify-between items-center">
            <img className="w-auto h-6 md:h-8 lg:auto" src={instagram} alt="instagram" />
            <img className="w-auto h-6 md:h-8 lg:auto" src={facebook} alt="facebook" />
            <img className="w-auto h-6 md:h-8 lg:auto" src={twitter} alt="twitter" />
            <img className="w-auto h-6 md:h-8 lg:auto" src={linkedin} alt="linkedin" />
          </div>
        </div>
      </div>
      <div className="w-full h-[44px] md:pl-[80px] flex justify-center md:justify-start items-center gap-5 bg-beige text-white">
        <BiCopyright className="w-6 h-6" />
        <p className="font-normal text-base">{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
