"use client"

import PatientForm from "@/components/forms/PatientForm"
import LogoImage from "../../public/assets/icons/logo-full.svg"
import Image from "next/image"
import Link from "next/link"
import OnBoardingImage from "../../public/assets/images/onboarding-img.png"

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src={LogoImage}
            alt="Logo"
            width={1000}
            height={1000}
            className="mb-12 w-fit"
          />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CarePulse
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        alt="Main Image"
        src={OnBoardingImage}
        width={1000}
        height={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  )
}