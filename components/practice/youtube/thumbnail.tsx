import Image from "next/image";

const Thumbnail = ({ src }: { src: string }) => {
	return (
		<div className="relative w-[300px] h-[200px]">
			<Image src={src} alt="썸네일" fill className="rounded-2xl" />
		</div>
	);
};

export default Thumbnail;
