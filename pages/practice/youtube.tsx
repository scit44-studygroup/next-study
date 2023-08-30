import Video from "@/components/practice/youtube/video";

interface YoutubeProps {
	thumbnail: string;
	profile: string;
	title: string;
}

const Youtube = () => {
	const data: YoutubeProps[] = [
		{
			thumbnail: `https://i.pinimg.com/564x/f2/1e/1e/f21e1e2e4d289869956d6f6df8f9694d.jpg`,
			profile: `https://i.pinimg.com/564x/44/73/2f/44732f3e0db05de6d409ded8def6c5df.jpg`,
			title: "dfafaf",
		},
		{
			thumbnail: `https://i.pinimg.com/564x/08/06/5a/08065adc226d6237da011942531579ac.jpg`,
			profile: `https://i.pinimg.com/564x/08/3d/fa/083dfa511e48484c8829c0b9f9f60337.jpg`,
		},
		{
			thumbnail: `https://i.pinimg.com/564x/25/87/cd/2587cd319ef500c67af650000b963a93.jpg`,
			profile: `https://i.pinimg.com/564x/73/f3/5a/73f35ab18a1e7cc588bc8d793a0d6860.jpg`,
		},
		{
			thumbnail: `https://i.pinimg.com/564x/71/8d/fc/718dfc4304a6e66d4a5a9a2733d2b5a0.jpg`,
			profile: `https://i.pinimg.com/564x/48/6c/a0/486ca00640b169300b48e9ceacd8e401.jpg`,
		},
		{
			thumbnail: `https://i.pinimg.com/564x/6a/4c/aa/6a4caab1a45c2e54e5d02bf38dc1be6d.jpg`,
			profile: `https://i.pinimg.com/564x/57/f4/f9/57f4f9c197af8a9958f13e8ec68f73a9.jpg`,
		},
	];
	return (
		<div>
			<h1 className="text-4xl">유튜브 클론코딩</h1>
			<div className="grid grid-cols-4 gap-4">
				{data.map((item, index) => (
					<Video
						key={index}
						thumb={item.thumbnail}
						profile={item.profile}
						title={item.title}
						author="나휘선"
						views={50}
						createdAt={3}
					/>
				))}
			</div>
		</div>
	);
};

export default Youtube;
