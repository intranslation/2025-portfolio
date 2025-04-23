export default function Me() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex h-screen w-full flex-col flex-nowrap items-center justify-center">
        <div>
          <h1 className="text-[6vw] leading-[6vw] text-gray-800 uppercase">
            I'm <br />
            Henrique <br /> Albuquerque
          </h1>
        </div>
        <div className="font-poppins flex flex-col justify-between text-left">
          <span className="text-[2.5vw] font-light">
            Software engineer,
            <br /> Programmer head, <br /> Gamer, <br /> and design enthusiast.
            <br />
          </span>
          <span className="text-[2vw] font-light lowercase opacity-50">
            Currently living in São Paulo, Brazil 🇧🇷
          </span>
        </div>
      </div>

      <div className="h-screen"></div>
    </div>
  );
}
