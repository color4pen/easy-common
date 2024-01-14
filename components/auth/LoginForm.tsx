import { signIn } from "../../actions/auth";


export default function LoginForm() {
  return (
    <form action={signIn}>
      <div className="flex flex-col gap-2 sm:w-fit max-sm:mt-5">
        <div className="sm:flex sm:items-center gap-2">
          <div className="text-xl min-w-[100px] select-none">
            email
          </div>
          <input type="text" name="email" className="input input-bordered w-full sm:max-w-xs select-none" />
        </div>
        <div className="sm:flex sm:items-center gap-2">
          <div className="text-xl min-w-[100px] select-none">
            password
          </div>
          <input type="password" name="password" className="input input-bordered w-full sm:max-w-xs select-none" />
        </div>
        <button className="btn btn-primary mt-2 sm:text-right">Login</button>
      </div>
    </form>
  )
}