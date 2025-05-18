import { IoMoonOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { useState } from "react";
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
            <div className="w-full  max-w-[1300px] flex items-center px-10 justify-between text-md sm:text-2xl">
                <p className=" font-bold ">Where in the world?</p>
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
                        <span>
                            <IoMoon style={{ 
                                fontSize: "100%", 
                                color: "#ffffff"
                                }}/>
                        </span>
                        
                    }
                    Dark Mode
                </span>
            </div> 
        </header>
    )
}