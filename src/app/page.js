import { Button } from "primereact/button";
import { auth } from "@/auth";
import * as actions from "@/actions";
import Profile from "@/components/Profile";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit" label="Sign In" />
      </form>
      <form action={actions.signOut}>
        <Button type="submit" label="Sign Out" />
      </form>
      {session?.user ? (
        <div>{JSON.stringify(session.user)}</div>
      ) : (
        <div>Signed Out</div>
      )}
      <Profile />
    </div>
  );
}
