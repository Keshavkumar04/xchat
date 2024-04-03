import { auth, signOut } from "@/auth";
import { db } from "@/lib/db";

const getUsers = async () => {
  const session = await auth();
  // console.log({ session });
  if (!session?.user?.email) {
    return [];
  }

  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          email: session.user.email, // excluding ourself
        },
      },
    });

    return users;
  } catch (error: any) {
    return [];
  }
};

export default getUsers;
