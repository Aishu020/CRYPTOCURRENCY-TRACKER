import { useNavigate } from "react-router-dom"
import { LogoIcon } from "../icons/icons"

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-purple-800 text-white h-14 flex items-center">
      <div className="wrapper-container w-full">
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate('/')}>
          <LogoIcon />
         <b> <p className="font-times">
            <span className="text-yellow-500">C</span>YPTO <span className="text-yellow-500">A</span>PP
          </p></b>
        </div>
      </div>
    </div>
  )
}


export default Navbar