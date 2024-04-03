import { useSession } from "next-auth/react";
// import { auth, signOut } from "@/auth";

import { useMemo } from "react";
import { FullConversationType } from "@/types";
import { User } from "@prisma/client";

const useOtherUser = (
  conversation: FullConversationType | { users: User[] }
) => {
  const session = useSession();
  // const session = auth();

  // console.log(session);

  const otherUser = useMemo(() => {
    const currentUserEmail = session.data?.user?.email;

    const otherUser = conversation.users.filter(
      (user) => user.email !== currentUserEmail
    );

    return otherUser[0];
  }, [session.data?.user?.email, conversation.users]);

  return otherUser;
};

export default useOtherUser;
