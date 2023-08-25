"use client";
import { useEffect, useState } from "react";

// interface IData {
// 	name: string;
// 	age: number;
// 	level: number;
// }
// interface IData {
// 	hp: number;
// 	mp: number;
// }

type IData = {
	name: string;
	age: number;
	level: number;
};

const severData: IData[] = [
	{ name: "cha", age: 26, level: 1 },
	{ name: "na", age: 25, level: 2 },
	{ name: "lee", age: 5, level: 3 },
	{ name: "choi", age: 26, level: 2 },
];

const ExampleEffect = () => {
	const [data, setData] = useState<IData[]>([]);
	const [counter, setCounter] = useState(0);
	const [keyword, setKeyword] = useState("");
	const plusCounter = () => setCounter((perv) => perv + 1);
	const minusCounter = () => setCounter((perv) => perv - 1);
	const inputData = (event: React.ChangeEvent<HTMLInputElement>) => setKeyword(event.target.value);

	console.log("저는 화면이 바뀔때마다 보여요");

	const fetchData = () => {
		setData(severData);
		console.log("서버 데이터 가져옴");
	};
	useEffect(fetchData, []);
	useEffect(() => {
		console.log("input 값이 달라졌어요", keyword);
	}, [keyword]);

	return (
		<div className="h-full grid grid-cols-1 gap-4">
			<div className="text-lg flex flex-col items-center">
				<span>{counter}</span>
				<div className="grid grid-cols-2 gap-4 place-items-center w-1/2">
					<span onClick={plusCounter} className="p-4 bg-gray-400 rounded-md">
						+
					</span>
					<span onClick={minusCounter} className="p-4 bg-gray-400 rounded-md">
						-
					</span>
				</div>
			</div>
			<div className="flex flex-col items-center">
				{data.map((person) => (
					<div
						key={person.name}
						className="grid grid-cols-3 gap-y-10 gap-x-4 w-1/2 place-items-center"
					>
						<p>{person.name}</p>
						<p>{person.age}</p>
						<p>{person.level}</p>
					</div>
				))}
			</div>
			<div className="flex flex-col items-center">
				<div className="grid grid-cols-2 gap-4 w-1/2 place-items-center">
					<span>검색</span>
					<input type="text" placeholder="검색할 단어를 넣어 주세요" onChange={inputData} />
				</div>
			</div>
		</div>
	);
};

export default ExampleEffect;
