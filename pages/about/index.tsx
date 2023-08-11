import Circle from "@/components/example/circle";
import Square from "@/components/example/square";

export default function AboutHome() {
	return (
		<>
			<div className="profile">
				<div className="toppic flex">
					<div className="pic">
						<Circle size={"200"} />
					</div>
					<div className="disc">
						<span>이름</span>
					</div>
				</div>
				<div className="stories flex">
					<Circle size={"100"} />
					<Circle size={"100"} />
					<Circle size={"100"} />
					<Circle size={"100"} />
					<Circle size={"100"} />
					<Circle size={"100"} />
					<Circle size={"100"} />
				</div>
			</div>
			<div className="grid grid-cols-3 gap-4">
				<Square />
				<Square />
				<Square />
				<Square />
				<Square />
				<Square />
			</div>
		</>
	);
}
