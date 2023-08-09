interface exampleType {
  replynum: number | string;
  memberid: string;
}
export default function AboutAbout() {
  const example: exampleType = {
    replynum: 1,
    memberid: "홍길동",
  };
  return <h1 className="text-4xl">{example.memberid}</h1>;
}
