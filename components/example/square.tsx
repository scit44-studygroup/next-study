import Image from "next/image";

export default function Square() {
  return (
    <div className="h-[300px] bg-yellow-400 flex items-center justify-center">
      <Image
        src="/static/next.svg"
        alt="image"
        width={300}
        height={300}
        priority
      />
    </div>
  );
}
