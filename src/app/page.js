import Image from "next/image";
import "./animations.css";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-black p-0 m-0 relative overflow-hidden">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] grid-rows-[repeat(auto-fill,minmax(40px,1fr))] h-full w-full">
        {Array.from({ length: 1000 }).map((_, index) => (
          <div
            key={index}
            className="square w-[40px] h-[40px] bg-black"
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/BlockBuilders-logo.svg"
          alt="BlockBuilders Logo"
          width={400}
          height={400}
          className="w-auto h-auto max-w-[600px] h-full"
        />
      </div>
    </div>
  );
}
