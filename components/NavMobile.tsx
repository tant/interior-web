import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import Nav from "./Nav"
import Logo from "./Logo"
import { AlignJustify } from "lucide-react"


const NavMobile = () => {
  return (
    <Sheet> 
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-center h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles='flex flex-col gap-y-6 items-center'
              linkStyles='text-1xl font-semibold'
              underlineStyles='' />

          </div>
        </div>

      </SheetContent>
    </Sheet>

  )
}

export default NavMobile