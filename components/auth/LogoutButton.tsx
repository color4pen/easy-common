'use server'
import { signout } from "@/actions/auth";
import { getUser } from "@/data/auth";

export default async function LogoutButton() {
  const user = await getUser()
  if (user) {
    return (
      <form action={signout}>
        <button className='btn btn-error btn-sm' type="submit">
          logout
        </button>
      </form>
    )
  }
}