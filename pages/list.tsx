export default function List() {
	const idList = ["aaa", "bbb", "ccc"];
	const nameList = ["차재헌", "이수정", "나휘선"];
	console.log(idList);
	idList.forEach((item) => {
		return item + "1";
	});
	console.log(idList);
	return (
		<table>
			<thead>
				<tr>
					<td>아이디</td>
					<td>이름</td>
				</tr>
			</thead>
			<tbody>
				{nameList.map((item) => (
					<tr key={item}>
						<td>{item}</td>
						<td></td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
