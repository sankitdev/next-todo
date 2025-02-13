import Link from "next/link";

export default function Footer() {
  return (
    <div className="absolute bottom-2 text-center">
      <span
        className="
text-decoration-line: underline"
      >
        <Link href={"https://github.com/sankitdev"}>@sankitdev </Link>{" "}
        {new Date().getFullYear()}
      </span>
    </div>
  );
}
