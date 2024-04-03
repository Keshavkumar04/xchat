import { NewPasswordForm } from "@/components/auth/new-password-form";
import LoadingModal from "@/components/chat/LoadingModal";
import { Suspense } from "react";

const NewPasswordPage = () => {
  return (
    <div>
      <Suspense fallback={<LoadingModal />}>
        <NewPasswordForm />
      </Suspense>
    </div>
  );
};

export default NewPasswordPage;
