import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = await cookies();
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/user`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });
  const user = await res.json();

  if (!user?.success) redirect("/sign-in");
  return (
    <div>
      <span>hello world</span>
    </div>
  );
}
