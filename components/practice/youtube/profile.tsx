import Image from "next/image";

const Profile = ({ src }: { src: string }) => {
	return (
		<div>
			<Image
				className="rounded-full"
				src={src}
				alt="프로필 사진"
				width={50}
				height={50}
				style={{
					objectFit: "cover",
				}}
			/>
		</div>
	);
};

export default Profile;
