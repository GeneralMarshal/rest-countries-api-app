import { IoSearch } from "react-icons/io5";
import capitalize from "../../utils/capitalizeText";

interface Props {
    allCountriesData: AllCountriesState
    searchProps: SearchProps
    toggleMode: ToggleMode

}
export default function SearchBar({allCountriesData, searchProps, toggleMode}:Props){
    const {searchResults, setSearchResults} = searchProps

    const elColor = (toggleMode === "light" ? "#ffffff" : "#2b3945")
    
     function filterSearch(e: React.ChangeEvent<HTMLInputElement>){
            const text = e.target.value
            let results:AllCountriesState = []
            if (text.length > 0){
                results = allCountriesData.filter((country) => country.name.includes(capitalize(text)))
            } else {
                results = []
            }
            console.log(results)
            setSearchResults(results)
            
        }
    return(
        <div 
            className="relative flex items-center py-3 w-[400px] h-12 gap-3 px-6  shadow-lg rounded-lg"
            style={{
                background: elColor
            }}
        >
                    <IoSearch style={{fontSize: "20px"}}/>
                    <input 
                        className=" w-full"
                        style={{background: elColor}}
                        type="text" 
                        placeholder="Search for a country..."
                        onChange={(e)=> filterSearch(e)}
                
                        />
                        {
                            searchResults.length > 0 &&
                            <div 
                                className="absolute w-[100%] h-32  inset-0 top-[100%] mt-2 rounded-lg overflow-y-auto"
                                style={{
                                    background: elColor
                                }}
                            >
                                {searchResults.map((country) => {
                                    return (
                                            <div className=" flex gap-3 items-center h-10  hover:bg-gray-200 cursor-pointer p-2">
                                                <img src={country.flags.svg} alt="" className="h-[20px] w-[30px]"/>
                                                <p>{country.name}</p>
                                            </div>   
                                       )
                                })}
                             </div>
                            
                        }
                        
                </div>
    )
}