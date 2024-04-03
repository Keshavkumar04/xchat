// import { auth, signOut } from "@/auth";

// const Dashboard = async () => {
//   const session = await auth();
//   return (
//     <div>
//       Settings page
//       <form
//         action={async () => {
//           "use server";

//           await signOut();
//         }}
//       >
//         <button type="submit">Sign out</button>
//       </form>
//     </div>
//   );
// };

// export default Dashboard;

// "use client";

import EmptyState from "@/components/chat/EmptyState";

const Dashboard = async () => {
  return (
    <div className="hiddden lg:block lg:pl-80 h-full">
      <EmptyState />
    </div>
  );
};

export default Dashboard;
