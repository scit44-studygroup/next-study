import Profile from "./profile";
import Thumbnail from "./thumbnail";

type VideoProps = {
	thumb: string;
	profile: string;
	title: string;
	author: string;
	views: number;
	createdAt: number;
};

const Video = ({ thumb, profile, title, author, views, createdAt }: VideoProps) => {
	return (
		<div className="grid grid-cols-1 gap-2">
			<Thumbnail src={thumb} />
			<div className="flex">
				<Profile src={profile} />
				<div className="flex flex-col ml-4">
					<span>{title}</span>
					<span>{author}</span>
					<div className="grid grid-cols-2 place-items-center">
						<span>조회수 {views}회</span>
						<span>{createdAt}일 전</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Video;
