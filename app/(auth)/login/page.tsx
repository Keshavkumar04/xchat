import { LoginForm } from "@/components/auth/login-form";
import LoadingModal from "@/components/chat/LoadingModal";
import { Suspense } from "react";

const LoginPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingModal />}>
        <LoginForm />
      </Suspense>
    </>
  );
};

export default LoginPage;
