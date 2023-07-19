import { Card } from "../components/About/Card";
import { team } from "../components/About/constants";

export const About = () => {
  return (
    <section className="flex flex-col max-w-[1280px] justify-center mx-auto px-3 mt-12 pb-6 gap-y-16 min-w-[340px]">
      <section className=" w-[90%] mx-auto">
        <h1 className=" text-2xl">Sobre nosotros</h1>
        <div className="flex flex-col-reverse sm:flex-row w-full  gap-[10%] sm: mt-5">
          <div className="flex items-center text-center sm:w-[50%] mt-5 sm:mt-0 ">
            <p>
              Lorem ipsum dolor sit amet consectetur. Senectus ullamcorper habitant nunc molestie
              nullam mauris. Et eu dui sed egestas feugiat dui dictum turpis diam. Non amet non
              quisque ultrices justo nisl. Eu mollis donec arcu rhoncus nibh id sed arcu eu. Egestas
              pretium pulvinar magnis parturient proin neque augue. In lorem sit nisl semper sit.
              Aliquam eleifend et quis egestas. A massa lorem amet sed.
            </p>
          </div>

          <div className=" sm:w-[50%]">
            <img
              src="https://img.freepik.com/vector-gratis/grupo-personas-que-comparten-recuerdos-personales_52683-32631.jpg?w=900&t=st=1689773077~exp=1689773677~hmac=f6d6631e87bd9a0a04c3eefe34b9535896e4939e3066d9b84f5020e56a055a74"
              alt="group"
            />
          </div>
        </div>
      </section>
      <section className=" w-[90%] mx-auto">
        <h2 className="text-2xl mb-14">Nuestro equipo</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {team.map(member => (
            <Card key={member.name} {...member} />
          ))}
        </div>
      </section>
    </section>
  );
};
