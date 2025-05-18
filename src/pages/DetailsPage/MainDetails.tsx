import Button from "../../Components/Button"
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import capitalize from "../../utils/capitalizeText";
interface Props{
    toggleProps: ToggleProps
    allCountriesData: AllCountriesState
}

export default function MainDetails({toggleProps,allCountriesData}: Props){
    const{ code } = useParams()
    const { toggleMode} = toggleProps
    const country = allCountriesData.find((country) => country.callingCodes[0] === code)

    const nativeName = capitalize(country?.nativeName) 
    const name = capitalize(country?.name)
    const region = capitalize(country?.region)
    const population = (country?.population)
    const subRegion = (country?.subregion)
    const topLevelDomain = (country?.topLevelDomain)
    const capital= (country?.capital)

    const currenciesArray:string[] = []

    country?.currencies?.map((currencyObject) => {
        currenciesArray.push(currencyObject.name)
        
    })
    const currencies = currenciesArray.join(", ")

    const  languageArray:string[] = []

    country?.languages?.map((languageObject) => {
        languageArray.push(languageObject.name)
        
    })
    const languages = languageArray.join(", ")

    const borderCountriesCodeArray = country?.borders
    const borderCountries:CountriesData[] = []
    borderCountriesCodeArray?.map((code)=>{
       const borderCountry =  allCountriesData.find((country) => country.alpha3Code === code)
       if(borderCountry)
       borderCountries.push(borderCountry)
    })

    return(
        <main  
            className=" w-full max-w-[1300px] h-full px-10 "

        >
            <Link to={`/`}>
                <Button toggleMode={toggleMode} stylesClass="  gap-1.5 mt-[50px] px-6 text-sm py-1.5">
                    <IoIosArrowRoundBack />
                    Back
                </Button>
            </Link>
           
            <div className=" flex flex-wrap w-full  gap-16 mt-12 ">
                <img src={country?.flags.svg} alt="" className=" w-full sm:w-[400px] h-auto sm:h-[266px]"/>
                <div className=" flex flex-col my-8" >
                    <p className=" text-xl font-bold">{name}</p>
                    <div className="flex mt-3 mb-6 text-xs gap-3 leading-6">
                        <ul className=" ">
                            <li className=""><span className=" font-semibold">Native Name: </span>{nativeName}</li>
                            <li className=""><span className=" font-semibold">Population: </span>{population?.toLocaleString()}</li>
                            <li className=""><span className=" font-semibold">Region: </span>{region}</li>
                            <li className=""><span className=" font-semibold">Sub Region: </span>{subRegion}</li>
                            <li className=""><span className=" font-semibold">Capital: </span>{capital}</li>
                        </ul>
                        <ul className=" text-xs leading-6">
                            <li className=""><span className=" font-semibold">Top Level Domain: </span>{topLevelDomain}</li>
                            <li className=""><span className=" font-semibold">Currencies: </span>{currencies}</li>
                            <li className=""><span className=" font-semibold">Languages: </span>{languages}</li>
                            
                        </ul>
                        
                    </div>
                    <div className=" flex flex-wrap max-w-[400px] gap-3 items-center ">
                        <p className=" text-xs font-semibold">Border Countries: </p>
                        {
                            borderCountries.map((country)=>{
                                return (
                                    <Link to={`/detailspage/${country.callingCodes}`}>
                                        <Button toggleMode={toggleMode} stylesClass=" cursor-pointer  text-xs py-1 w-20">{country.name}</Button>
                                    </Link>
                                )
                       
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </main>
    )
}