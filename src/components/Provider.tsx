"use client"
import React, {
  createContext,
  ReactNode,
  useMemo,
  useContext,
  useState,
} from "react"

interface CareContextType {
  isLoading: boolean
  setIsLoading: (value: boolean) => void
}

const CareContext = createContext<CareContextType | undefined>(undefined)

export const CareProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false)

  const values = useMemo(
    () => ({
      isLoading,
      setIsLoading,
    }),
    [isLoading]
  )

  return <CareContext.Provider value={values}>{children}</CareContext.Provider>
}

export const useCareState = (): CareContextType => {
  const context = useContext(CareContext)
  if (context === undefined) {
    throw new Error("useCareState must be used within a CareProvider")
  }
  return context
}

export default CareContext
