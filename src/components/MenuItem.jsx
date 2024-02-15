import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link href={address}>
        <Icon className="text-2xl sm:hidden" />
        <p className="uppercase hidden sm:inline"> {title} </p>
      </Link>
    </div>
  );
}
