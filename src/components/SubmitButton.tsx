import { Button } from "./ui/button"
import ICONSPIN from "../../public/assets/icons/loader.svg"
import Image from "next/image"
import { useCareState } from "@/components/Provider"

interface ButtonProps {
  className?: string
  children: React.ReactNode
}

const SubmitButton = ({ className, children }: ButtonProps) => {
  const { isLoading } = useCareState()

  return (
    <Button
      type="submit"
      className={className ?? "shad-primary-btn w-full pt-4 pb-4"}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src={ICONSPIN}
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading..
        </div>
      ) : (
        children
      )}
    </Button>
  )
}

export default SubmitButton
