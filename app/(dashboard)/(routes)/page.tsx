import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1 className="text-xl text-sky-500">Home</h1>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
