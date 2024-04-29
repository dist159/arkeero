import Image from "next/image";
const Header = () => {
  return (
    <div className="flex flex-row p-6 shadow-lg w-full">
      <Image
        className='w-[200px]'
        src={"/main-logo.png"}
        alt={"main logo"}
        width={400}
        height={400}
      />
    </div>
  );
};

export default Header;
