import { NewVerificationForm } from "@/components/auth/new-verification-form";
import LoadingModal from "@/components/chat/LoadingModal";
import { Suspense } from "react";

const NewVerificationPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingModal />}>
        <NewVerificationForm />
      </Suspense>
    </>
  );
};

export default NewVerificationPage;
