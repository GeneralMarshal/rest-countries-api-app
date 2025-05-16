interface Props{
    countryData: CountriesData
    toggleMode: ToggleMode
}
export default function CountryCard({countryData, toggleMode}: Props){


    const bgColor = (toggleMode === "light" ? "#ffffff" : "#2b3945")

    return(
        <div 
            className=" flex flex-col w-[210px] rounded-lg overflow-hidden shadow-lg"
            style={{
                background: bgColor
            }}
        >
            <div className=" w-full  h-[140px] ">
                <img 
                    className="h-full w-full object-cover"
                    src={countryData.flags.svg}
                    alt="" 
                />
            </div>
            <div className=" w-full h-[140px]  p-4">
                <p className=" font-bold mb-2">
                    {countryData.name}
                </p>
                <div className="text-xs leading-5">
                    <p>
                        <span className=" font-semibold">Population</span>: {
                            countryData.population
                        }
                    </p>
                    <p>
                        <span className=" font-semibold">Region</span>: {
                            countryData.region
                        }
                    </p>
                    <p>
                        <span className=" font-semibold">Capital</span>: {
                            countryData.capital
                        } 
                    </p>
                </div>
            </div>

        </div>
    )
}