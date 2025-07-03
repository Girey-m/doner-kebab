import Image from "next/image";

export default function User() {
  return (
    <a href="home">
      <Image src="/user.svg" alt="пользователь" width={40} height={40} />
    </a>
  );
}
