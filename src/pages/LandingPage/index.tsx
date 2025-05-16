import Header from "../../Components/Header"
import Main from "./Main"
import { useState, useEffect } from "react"

interface Props {
    toggleProps: ToggleProps
}

export default function LandingPage({toggleProps}:Props){
    const{toggleMode} = toggleProps
    const [allCountriesData, setAllCountriesData] = useState<AllCountriesState>([])
    const [toggleFilters, setToggleFilters] = useState(false)
    const [filterArray, setFilterArray] = useState<Filters[]>([])

    const bgColor = (toggleMode === "light" ? "#f4ecec" : "#202c37")
    const textColor = (toggleMode === "light" ? "black" : "#ffffff")

    const filterProps = {
        toggleFilters, setToggleFilters, filterArray, setFilterArray
    }

    useEffect(() => {
        fetch("/src/data.json")
        .then( res => res.json())
        .then( data => setAllCountriesData(data))
    }, [])

    return(
        <div 
            className=" h-full flex flex-col items-center "
            style={{background: bgColor, color: textColor}}
        >
            <Header toggleProps={toggleProps}/>
            <Main 
                allCountriesData={allCountriesData} 
                filterProps = {filterProps}
                toggleProps = {toggleProps}
                bgColor = {bgColor}
                
            />
        </div>
    )
     
}