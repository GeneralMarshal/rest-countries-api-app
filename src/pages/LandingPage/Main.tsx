import CountryCard from "./CountryCard";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import capitalize from "../../utils/capitalizeText";
import { useEffect, useState } from "react";

interface Props {
    filterProps: FilterProps
    allCountriesData: AllCountriesState
}


export default function Main( { filterProps, allCountriesData}: Props){
    const { toggleFilters, setToggleFilters, filterArray, setFilterArray} = filterProps
    const listOfFilter:Filters[] = ["africa", "america" , "asia" , "europe" , "oceania"]
    const [displayCountriesData, setDisplayCountriesData] = useState<AllCountriesState>(allCountriesData)
    const [searchResults, setSearchResults] = useState<AllCountriesState>([])
    useEffect(()=>{
        setDisplayCountriesData(allCountriesData)
    }, [allCountriesData])
    
    function handleFiltersArray(type:Filters){
        const newFilteres = [ type]

        const newCountriesData = allCountriesData.filter((country)=> country.region === capitalize(newFilteres[0]))
        // if( filterArray.includes(type)){
        //     const index = filterArray.indexOf(type)
        //     setFilterArray((prevArray) => {
        //        return  prevArray.splice(index, 1)
        //     })
        // }
        // else if(!filterArray.includes(type)){
        //     setFilterArray((prev) => {return [...prev, type]})
        // }
        setDisplayCountriesData(newCountriesData)
        setFilterArray([type])
    }
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
        <main className=" w-full max-w-[1300px]   h-full px-10 ">
            {/* search bar */}
            <div className="flex justify-between mb-12 w-full my-[50px]">
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
                                                <img src={country.flags.svg} alt="" className="h-[30px]"/>
                                                <p>{country.name}</p>
                                            </div>   
                                       )
                                })}
                             </div>
                            
                        }
                        
                </div>

                {/* filter button */}
                <div className="relative flex flex-col gap-1 ">
                    <div 
                        className=" flex text-sm items-center px-6 py-4 gap-8  shadow-md bg-[#ffffff] rounded-lg cursor-pointer"
                        onClick={()=>{
                            setToggleFilters(prev => !prev)
                        }}
                    >
                        Filter by Region
                        <MdKeyboardArrowDown />
                    </div>
                    {/* the filter drop down */}
                    { toggleFilters && <div className="absolute w-full top-[100%] mt-2 z-10 shadow-lg   bg-[#ffffff] rounded-lg">
                        <ul className=" leading-8  cursor-pointer">
                            
                            {
                                listOfFilter.map((option, index) =>{
                                    return (
                                        <li 
                                            key={index}
                                            onClick={()=>handleFiltersArray(option)} 
                                            className=" px-6 py-.5 pt-2 hover:bg-gray-200" 
                                            style={{backgroundColor: filterArray.includes(option) ? "#e5e7eb" : "#ffffff" }}
                                        >
                                            {capitalize(option)}
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>}
                </div>
            </div>

            <section className=" w-full flex justify-center ">
                <div className="country-grid w-full gap-8 ] " >
                    {    displayCountriesData.map((countryData, index) => {
                            return <CountryCard key={index} countryData={countryData}/>
                        }) 
                    }
                </div>
            </section>
            
            

            
        </main>
    )
}