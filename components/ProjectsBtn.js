import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/work"}
        className="w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={"/rounded-text.png"}
          width={141}
          height={148}
          alt="my-project"
          className="animate-spin-slow"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 group-hover:text-accent transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
