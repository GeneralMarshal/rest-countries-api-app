import { IoMoonOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
interface Props {
    toggleProps: ToggleProps
  
}
export default function Header({toggleProps}:Props){
    const {toggleMode, setToggleMode} = toggleProps

    const textColor = ( toggleMode === "light" ? "black" : "#ffffff")
    return(
        <header 
            className=" flex w-full  justify-center items-center py-6 "
            style={{
                backgroundColor: toggleMode === "light" ? "#ffffff" : "#2b3945",
                color: textColor
            }}
        >
            <div className="w-full  max-w-[1300px] flex items-center px-10 justify-between">
                <p className=" font-bold text-2xl">Where in the world?</p>
                <span 
                    className=" flex gap-2 items-center font-semibold cursor-pointer"
                    onClick={ () =>{
                        if(toggleMode === "light"){
                            setToggleMode("dark")
                        }else{
                            setToggleMode("light")
                        }
                        console.log(toggleMode)
                    }}
                >
                    {
                        toggleMode === "light" ? <IoMoonOutline style={{ fontSize:"20px"}}/> :
                        <IoMoon style={{ fontSize:"20px", color: "#ffffff"}}/>
                    }
                    Dark Mode
                </span>
            </div> 
        </header>
    )
}