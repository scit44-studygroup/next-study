"use client";
import { useEffect, useState } from "react";

interface IData {
	name: string;
	age: number;
	level: number;
}

const severData: IData[] = [
	{ name: "cha", age: 26, level: 1 },
	{ name: "na", age: 25, level: 2 },
	{ name: "lee", age: 5, level: 3 },
];

const ExampleEffect = () => {
	const [data, setData] = useState<IData[]>([]);
	console.log(data, "저는 화면이 바뀔때마다 보여요");
	const fetchData = () => {
		setData(severData);
		console.log(data);
		console.log("서버 데이터 가져옴");
	};
	useEffect(fetchData, []);
	return (
		<div className="h-full">
			{data.map((person) => (
				<div key={person.name} className="grid grid-cols-3 gap-y-10 gap-x-4 w-1/2">
					<p>{person.name}</p>
					<p>{person.age}</p>
					<p>{person.level}</p>
				</div>
			))}
		</div>
	);
};

export default ExampleEffect;
