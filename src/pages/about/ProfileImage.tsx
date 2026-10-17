interface ProfileImageLayout {
  image: string;
}

export default function ProfileImage({ image }: ProfileImageLayout) {
  return (
    <div className=" w-full px-4 my-auto md:w-85">
      <div className="bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-4xl overflow-hidden shadow-lg w-70 m-auto md:w-80 md:right-0 md:mt-0 ">
        <img
          src={image}
          alt="profile"
          className="h-full w-full object-cover mx-auto"
        />
      </div>
    </div>
  );
}
