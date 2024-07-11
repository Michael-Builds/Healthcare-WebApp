import React from "react"
import Image from "next/image"
import { getUser } from "@/lib/actions/patient.actions"

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId)

  return (
    <div className="flex h-screen max-h-screen">
      <section>welcome home</section>
    </div>
  )
}

export default Register
