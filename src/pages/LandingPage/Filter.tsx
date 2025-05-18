import { MdKeyboardArrowDown } from "react-icons/md";
import capitalize from "../../utils/capitalizeText";

interface Props{
    elColor: string
    filterProps: FilterProps
    bgColor: string
    listOfFilters: Filters[]
    handleFiltersArray: (type:Filters) => void
}
export default function Filter({elColor, bgColor, filterProps, listOfFilters, handleFiltersArray}:Props){
    const {toggleFilters, setToggleFilters} = filterProps
    return(
        <div 
                    className="relative flex flex-col w-[200px] gap-1 "
                    
                >
                    <div 
                        className=" flex text-sm items-center px-6 py-4 gap-8  shadow-md  rounded-lg cursor-pointer"
                        style={{
                            background: elColor,
                        }}
                        onClick={()=>{
                            setToggleFilters(prev => !prev)
                        }}
                    >
                        Filter by Region
                        <MdKeyboardArrowDown />
                    </div>
                    {/* the filter drop down */}
                    { toggleFilters && <div 
                        className="absolute w-full top-[100%] mt-2 z-10 shadow-lg  rounded-lg"
                        
                        
                    >
                        <ul 
                            className=" leading-8  cursor-pointer"
                            style={{background: bgColor}}
                            
                        >
                            
                            {
                                listOfFilters.map((option, index) =>{
                                    return (
                                        
                                        <li 
                                            key={index}
                                            onClick={()=>handleFiltersArray(option)} 
                                            className=" px-6 py-.5 pt-2 hover:bg-gray-200" 
                                            // style={{backgroundColor: filterArray.includes(option) ? "#e5e7eb" : "#ffffff" }}
                                            style={{background: elColor}}
                                        >
                                            {capitalize(option)}
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>}
                </div>
    )
}