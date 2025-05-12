interface Props{
    countryData: CountriesData
}
export default function CountryCard({countryData}: Props){
    return(
        <div className=" flex flex-col w-[210px] rounded-lg overflow-hidden shadow-lg">
            <div className=" w-full  h-[140px] ">
                <img 
                    className="h-full w-full object-cover"
                    src={countryData.flags.svg}
                    alt="" 
                />
            </div>
            <div className=" w-full h-[140px] bg-[#ffffff] p-4">
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