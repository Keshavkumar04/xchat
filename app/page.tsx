import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

// how to get a custom font in it
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex  h-full flex-col items-center justify-center bg-sky-300">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className // getting the poppins font on the h1 text
          )}
        >
          Xchat
        </h1>
        <p className="text-white text-lg">A simple chatting application</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
