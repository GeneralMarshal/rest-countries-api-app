import CountryCard from "./CountryCard";
import SearchBar from "./SearchBar";
import capitalize from "../../utils/capitalizeText";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";

interface Props {
    filterProps: FilterProps
    allCountriesData: AllCountriesState
    toggleProps: ToggleProps
    bgColor: string
}


export default function Main( { filterProps, allCountriesData, toggleProps, bgColor}: Props){
    const { setFilterArray} = filterProps
    const {toggleMode} = toggleProps

    const listOfFilters:Filters[] = ["africa", "americas" , "asia" , "europe" , "oceania"]
    const [displayCountriesData, setDisplayCountriesData] = useState<AllCountriesState>(allCountriesData)
    const [searchResults, setSearchResults] = useState<AllCountriesState>([])

    const searchProps = {searchResults, setSearchResults}
    const elColor = (toggleMode === "light" ? "#ffffff" : "#2b3945")
   

    useEffect(()=>{
        setDisplayCountriesData(allCountriesData)
    }, [allCountriesData])
    
    function handleFiltersArray(type:Filters){
        const newFilteres = [type]

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

    return(
        <main  
            className=" w-full max-w-[1300px] h-auto px-10 " 
        >
            <div className="flex flex-col sm:flex-row gap-3 justify-between mb-12 w-full my-[50px]">
            {/* search bar */}
                <SearchBar allCountriesData = {allCountriesData} searchProps = {searchProps} toggleMode={toggleMode} />
                {/* filter button */}
                <Filter filterProps={filterProps} elColor={elColor} bgColor={bgColor} listOfFilters={listOfFilters} handleFiltersArray={handleFiltersArray}/>
            </div>
            <section className=" w-full flex justify-center ">
                <div className="country-grid w-full gap-8 ] " >
                    {    

                        displayCountriesData.map((countryData, index) => {
                            return <Link to={`/detailspage/${countryData.callingCodes}`}>
                             <CountryCard key={index} countryData={countryData} toggleMode={toggleMode}/>
                            </Link>
                        }) 
                    }
                </div>
            </section>
            
            

            
        </main>
    )
}