export default function Circle({ size }: { size: string }) {
  return (
    <div
      className={`bg-blue-400 w-[${size}px] h-[${size}px] rounded-full`}></div>
  );
}
