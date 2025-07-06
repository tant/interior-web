import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="Interior Website Logo" width={160} height={55} />
    </Link>
  );
};

export default Logo;