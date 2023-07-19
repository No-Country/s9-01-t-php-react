import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

export const Card = ({ name, position, profile_linkedin, profile_github, img }) => {
  return (
    <article className="flex flex-col items-end">
      <div className="flex w-full justify-evenly  gap-4">
        <img src={img} className=" rounded-full" height="60px" width="60px" alt="profile" />
        <div className=" flex flex-col justify-evenly">
          <a href={profile_linkedin} target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="h-6 w-6" />
          </a>

          <a href={profile_github} target="_blank" rel="noopener noreferrer">
            <AiOutlineGithub className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div>
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
    </article>
  );
};
