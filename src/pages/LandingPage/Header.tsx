import { IoMoonOutline } from "react-icons/io5";

export default function Header(){
    return(
        <header className=" flex w-full  justify-center items-center py-6 bg-[#ffffff]">
            <div className="w-full  max-w-[1300px] flex items-center px-10 justify-between">
                <p className=" font-bold text-2xl">Where in the world?</p>
                <span className=" flex gap-2 items-center font-semibold">
                    <IoMoonOutline style={{ fontSize:"20px"}}/>
                    Dark Mode
                </span>
            </div> 
        </header>
    )
}