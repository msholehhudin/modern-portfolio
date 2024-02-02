import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none border border-red-500">
      <Image
        src={"/avatar.png"}
        width={737}
        height={678}
        alt="avatar"
        className="w-full h-full translate-z-0"
      />
    </div>
  );
};

export default Avatar;
