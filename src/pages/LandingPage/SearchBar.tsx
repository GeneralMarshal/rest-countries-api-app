import { IoSearch } from "react-icons/io5";
import capitalize from "../../utils/capitalizeText";

interface Props {
    allCountriesData: AllCountriesState
    searchProps: SearchProps
}
export default function SearchBar({allCountriesData, searchProps}:Props){
    const {searchResults, setSearchResults} = searchProps
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
        <div className="relative flex items-center py-3 w-[400px] h-12 gap-3 px-6 bg-[#ffffff] shadow-lg rounded-lg">
                    <IoSearch style={{fontSize: "20px"}}/>
                    <input 
                        className=" w-full"
                        type="text" 
                        placeholder="Search for a country..."
                        onChange={(e)=> filterSearch(e)}
                
                        />
                        {
                            searchResults.length > 0 &&
                            <div className="absolute w-[100%] h-32  bg-[#ffffff] inset-0 top-[100%] mt-2 rounded-lg overflow-y-auto">
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