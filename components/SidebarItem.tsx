import Image from "next/image";
import Link from "next/link";

export default function SidebarItem({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <Link
      href="#"
      className="relative min-w-[200px] md:min-w-0 h-32 rounded-[10px] overflow-hidden group"
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover brightness-75 group-hover:brightness-90 transition-all"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <span className="text-white font-bold text-lg">{title}</span>
      </div>
    </Link>
  );
}
