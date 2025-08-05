import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/images/main logo.png"
      alt="MCCED Logo"
      width={180}
      height={60}
      className="h-14 w-auto"
      priority
    />
  );
}
