import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen relative">
        <div className="absolute flex flex-row h-full md:mx-20 mx-10 justify-left items-center z-40">
          <div className="xl:w-1/2 w-full space-y-4">
            <h1 className="font-semibold md:text-8xl text-7xl text-white"> Manage your event with us </h1>
            <p className="text-white text-2xl">Manage work across teams with one platform </p>
            <button className="text-white py-3 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-500 duration-200 font-semibold">
             <a href="/About"> Selengkapnya </a>
            </button>
          </div>
          <div/>
        </div>
        <div className="bg-black/50 backdrop-blur-sm z-20 absolute w-full h-full"/>
        <img src="/images/Event.jpg" className="absolute z-10 w-full h-full object-cover" />
      </div>
    </>
  );
}
