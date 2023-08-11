export default function Home() {
	return (
		<div className="p-20">
			<h1 className="text-4xl mb-10">Project Setting & Routing System</h1>
			<div className="grid grid-rows-1 gap-10">
				<div>
					<h2 className="text-2xl">Project Setting</h2>
					<p>node.js 설치</p>
					<p>npm install -g npm</p>
					<p>npx create-next-app</p>
					<p>
						프로젝트 이름, 타입스크립트 사용 여부, 패키지 매니저 선택, Tailwind CSS 사용여부, App
						Router사용 여부, import alias사용여부
					</p>
					<p>패키지 매니저: npm</p>
					<p>App Router 미사용</p>
					<p>import alias 미사용</p>
				</div>
				<hr />
				<div>
					<h2 className="text-2xl">Routing System</h2>
					<p>프로젝트 폴더/pages 폴더에 생성된 폴더 및 .tsx파일의 이름으로 url 생성</p>
					<p>Example</p>
					<p>/pages/index.tsx == localhost:3000/</p>
					<p>/pages/test.tsx == localhost:3000/test</p>
					<p>/pages/list/read/[id].tsx == localhost:3000/list/read/1</p>
					<p>/pages/list/read/index.tsx == localhost:3000/list/read/</p>
				</div>
			</div>
		</div>
	);
}
