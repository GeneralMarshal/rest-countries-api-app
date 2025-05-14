import Header from "../../Components/Header"
import Main from "./Main"
import { useState, useEffect } from "react"

interface Props {
    toggleMode: ToggleMode
}

export default function LandingPage({toggleMode}:Props){
    const [allCountriesData, setAllCountriesData] = useState<AllCountriesState>([])
    const [toggleFilters, setToggleFilters] = useState(false)
    const [filterArray, setFilterArray] = useState<Filters[]>([])


    const filterProps = {
        toggleFilters, setToggleFilters, filterArray, setFilterArray
    }

    useEffect(() => {
        fetch("/src/data.json")
        .then( res => res.json())
        .then( data => setAllCountriesData(data))
    }, [])

    return(
        <div className=" h-full flex flex-col items-center  ">
            <Header/>
            <Main 
                allCountriesData={allCountriesData} 
                filterProps = {filterProps}
            />
        </div>
    )
     
}