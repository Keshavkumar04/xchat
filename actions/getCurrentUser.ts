import { auth, signOut } from "@/auth";
import { db } from "@/lib/db";

const getCurrentUser = async () => {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await db.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });
    if (!currentUser) {
      return null;
    }
    return currentUser;
  } catch (error: any) {
    return null;
  }
};

export default getCurrentUser;
("");

// const session = await auth();
