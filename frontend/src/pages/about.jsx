import { Card } from "../components/About/Card";
import { team } from "../components/About/constants";
import { useSelector } from "react-redux"; 

export const About = () => {
  const { about: aboutLang } = useSelector((state) => state.lang);
  const { aboutUsTitle, aboutUsContent, teamTitle } = aboutLang;

console.log(aboutLang);
  return (
    <section className="flex flex-col max-w-[1280px] justify-center mx-auto px-3 mt-12 pb-6 gap-y-16 min-w-[340px]">
      <section className="w-[90%] mx-auto">
        
        <h1 className="text-[36px] text-primary">{aboutUsTitle}</h1>
        <div className="flex flex-col-reverse sm:flex-row w-full gap-[10%] sm:mt-5">
          <div className="flex items-center text-center sm:w-[50%] mt-5 sm:mt-0">
            <p>{aboutUsContent}</p>
          </div>
          <div className=" flex justify-center sm:w-[50%]">
            <img
              src='https://i.ibb.co/S62zvYM/teamimage.png'
              alt="group"
            />
          </div>
        </div>
      </section>
      <section className="w-[90%] mx-auto">
        <h2 className="text-2xl mb-14 text-ligthblue font-semibold">{teamTitle}</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {team.map((member) => (
            <Card key={member.name} {...member} />
          ))}
        </div>
      </section>
    </section>
  );
};
