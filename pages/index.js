import { useSession } from "next-auth/react";
import NextAuth from "../component/NextAuth";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <h1 className="text-center"> {session?.user?.name}</h1>
      <NextAuth> </NextAuth>
    </div>
  );
}
