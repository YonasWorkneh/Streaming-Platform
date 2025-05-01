import Image from "next/image";
import Link from "next/link";

export default function NavItem({
  src="#",
  icon,
  label,
  bgColor = "bg-gray-800",
  active = false,
  isUser = false,
}: {
  src?:string,
  icon: string;
  label: string;
  active?: boolean;
  isUser?: boolean;
  bgColor?: string;
}) {
  return (
    <Link
      href={src}
      className={`flex flex-col items-center justify-center text-xs ${
        active ? "text-green-500" : "text-gray-300"
      }`}
    >
      <div
        className={`w-10 h-10 rounded-full overflow-hidden  flex items-center justify-center mb-1 ${bgColor}`}
      >
        <Image
          src={icon || "/placeholder.svg"}
          alt={label}
          width={40}
          height={40}
          className={`${isUser ? "object-cover" : "object-contain p-2"}`}
        />
      </div>
      <span>{label}</span>
    </Link>
  );
}
