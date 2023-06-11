import * as React from "react"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container flex h-[calc(100vh-6.5rem)] flex-col items-center justify-center pb-8 pt-6 md:py-10">
      {children}
    </div>
  )
}
