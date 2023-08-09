import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <Link href={"/"}>
        <span>Home</span>
      </Link>
      <Link href={"/list"}>
        <span>List</span>
      </Link>
      <Link href={"/test"}>
        <span>Test</span>
      </Link>
      <Link href={"/about"}>
        <span>About</span>
      </Link>
      <Link href={"/about/about"}>
        <span>About about</span>
      </Link>
    </div>
  );
}
