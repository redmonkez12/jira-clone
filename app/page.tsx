"use client";

import { useCurrent } from "@/features/auth/api/user-current";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLogout } from "@/features/auth/api/use-logout";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data, isLoading } = useCurrent();
  const router = useRouter();
  const { mutate } = useLogout();
  
  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in");
    }
  }, [data]);
  
  return (
    <div>
      <Button onClick={() => mutate()}>
        Logout
      </Button>
    </div>
  )
}
