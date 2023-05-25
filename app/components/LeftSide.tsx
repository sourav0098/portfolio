import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function LeftSide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="mailto:souravchoudhary1998@gmail.com" aria-label="Mail">
          <span className="w-8 h-8 text-4xl inline-flex items-center justify-content hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaEnvelope />
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <a href="https://github.com/sourav0098" target="_blank" aria-label="Github">
          <span className="w-8 h-8 text-4xl inline-flex items-center justify-content hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaGithub />
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <a href="https://www.linkedin.com/in/sourav009/" target="_blank" aria-label="Linkedin">
          <span className="w-8 h-8 text-4xl inline-flex items-center justify-content hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <FaLinkedin />
          </span>
        </a>
      </div>
      {/* <div className="w-[2px] h-32 bg-textDark"></div> */}
    </div>
  );
}
