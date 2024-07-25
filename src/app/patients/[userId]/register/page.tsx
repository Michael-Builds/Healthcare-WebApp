import RegisterForm from "@/components/forms/RegisterForm"
import { getUser } from "@/lib/actions/patient.actions"
import Image from "next/image"
import LogoImage from "../../../../../public/assets/icons/logo-full.svg"
import RegisterImage from "../../../../../public/assets/images/register-img.png"
import * as Sentry from "@sentry/nextjs"

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId)

  Sentry.metrics.set("user_view_register", user.name)
  
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src={LogoImage}
            alt="Logo"
            width={1000}
            height={1000}
            className="mb-12 w-fit"
          />
          <RegisterForm user={user} />
          <p className="copyright py-12">© 2024 CarePulse</p>
        </div>
      </section>
      <Image
        alt="register"
        src={RegisterImage}
        width={1000}
        height={1000}
        className="side-img max-w-[390px]"
      />
    </div>
  )
}

export default Register
