export default function Test({ cha }: { cha: string }) {
	return (
		<div>
			<h2 className="text-7xl">리액트 코딩 수업</h2>
			<h3>{cha}</h3>
			<table>
				<tbody>
					<tr>
						<td>1</td>
						<td>2</td>
						<td>3</td>
					</tr>
				</tbody>
			</table>
		</div> // <th:block></th:block>
	);
}
