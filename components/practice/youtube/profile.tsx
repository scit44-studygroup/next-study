import Image from "next/image";

const Profile = ({ src }: { src: string }) => {
	return (
		<div className="relative w-[50px] h-[50px]">
			<Image
				className="rounded-full"
				src={src}
				alt="프로필 사진"
				// width={50}
				// height={50}
				objectFit="cover"
				fill
				sizes="100vh"
			/>
		</div>
	);
};

export default Profile;
