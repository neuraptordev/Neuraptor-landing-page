import Image from "next/image"

interface TechLogoProps {
  name: string
  icon: string
}

export function TechLogo({ name, icon }: TechLogoProps) {
  return (
    <div className="aspect-square rounded-full border border-white/20 flex items-center justify-center p-6 hover:border-[#2194F2]/50 transition-all duration-300">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
        <Image src={icon || "/placeholder.svg"} alt={name} width={30} height={30} />
      </div>
    </div>
  )
}
