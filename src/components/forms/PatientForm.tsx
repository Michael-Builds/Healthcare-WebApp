"use client"
import { useCareState } from "@/components/Provider"
import { Form } from "@/components/ui/form"
import { UserFormValidation } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import EMAILICON from "../../../public/assets/icons/email.svg"
import USERICON from "../../../public/assets/icons/user.svg"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { createUser } from "@/lib/actions/patient.actions"

export enum FormFieldTypes {
  INPUT = "input",
  CHECKBOX = "checkbox",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}
const PatientForm = () => {
  const router = useRouter()
  const { setIsLoading } = useCareState()

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true)
    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      }

      const newUser = await createUser(user)
      if (newUser) {
        form.reset()
        router.push(`/patients/${newUser.$id}/register`)
      }
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Schedule your first appointment</p>
        </section>
        <CustomFormField
          fieldType={FormFieldTypes.INPUT}
          control={form.control}
          name="name"
          label="Full Name"
          placeholder="Michael Kabanda"
          iconSrc={USERICON}
          iconAlt="user"
        />
        <CustomFormField
          fieldType={FormFieldTypes.INPUT}
          control={form.control}
          name="email"
          label="Email Address"
          placeholder="jango@gmail.com"
          iconSrc={EMAILICON}
          iconAlt="email"
        />
        <CustomFormField
          fieldType={FormFieldTypes.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone Number"
          placeholder="(+233) 555-55553"
        />
        <SubmitButton>Get Started</SubmitButton>
      </form>
    </Form>
  )
}

export default PatientForm
