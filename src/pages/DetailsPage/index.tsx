import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Header from "../../Components/Header"
import MainDetails from "./MainDetails"

interface Props{
    toggleProps: ToggleProps
}


export default function DetailsPage({toggleProps}:Props){
    
    const[allCountriesData, setAllCountriesData] = useState<AllCountriesState>([])

    const {toggleMode, setToggleMode} = toggleProps
    const bgColor = (toggleMode === "light" ? "#f4ecec" : "#202c37")
    const textColor = (toggleMode === "light" ? "black" : "#ffffff")

    useEffect(()=>{
        fetch("/src/data.json")
        .then(res => res.json())
        .then(data => setAllCountriesData(data))
    }, [])

    return(
        <div 
            className="h-full min-h-[100vh] flex flex-col items-center "
            style={{
                background: bgColor,
                color: textColor
            }}
        >
            <Header toggleProps={toggleProps} />
            <MainDetails
                toggleProps={toggleProps}
                allCountriesData={allCountriesData}
            />
        </div>
    )
}