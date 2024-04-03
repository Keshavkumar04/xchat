"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect", // DEFAULT
  asChild,
}: LoginButtonProps) => {
  // USING ROUTER
  const router = useRouter();

  const onClick = () => {
    // console.log("LOGIN_BUTTON CLICKED");
    router.push("/login");
  };

  if (mode === "modal") {
    return <span>TODO:Implement modal</span>;
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
