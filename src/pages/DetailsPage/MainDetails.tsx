import Button from "../../Components/Button"
import { IoIosArrowRoundBack } from "react-icons/io";

export default function MainDetails(){
    return(
        <main className=" w-full max-w-[1300px] h-full px-10 ">
            <Button stylesClass="  gap-1.5 mt-[50px] px-6 text-sm py-1.5">
                <IoIosArrowRoundBack />
                Back
            </Button>
            <div className=" flex flex-wrap  gap-16 mt-12 ">
                <img src="https://flagcdn.com/af.svg" alt="" className=" w-[400px] h-[266px]"/>
                <div className=" flex flex-col my-8" >
                    <p className=" text-xl font-bold">Belgium</p>
                    <div className="flex mt-3 mb-6 text-xs gap-3 leading-6">
                        <ul className=" ">
                            <li className=""><span className=" font-semibold">Native Name: </span>Belgié</li>
                            <li className=""><span className=" font-semibold">Population: </span>11,839,380</li>
                            <li className=""><span className=" font-semibold">Region: </span>Europe</li>
                            <li className=""><span className=" font-semibold">Sub Region: </span>Western Europe</li>
                            <li className=""><span className=" font-semibold">Capital: </span>Brussels</li>
                        </ul>
                        <ul className=" text-xs leading-6">
                            <li className=""><span className=" font-semibold">Top Level Domain: </span>.be</li>
                            <li className=""><span className=" font-semibold">Currencies: </span>Euro</li>
                            <li className=""><span className=" font-semibold">Languages: </span>Dutch, French, Germain</li>
                            
                        </ul>
                    </div>
                    <div className=" flex gap-3 items-center ">
                        <p className=" text-xs font-semibold">Border Countries: </p>
                        <Button stylesClass="   text-xs py-1 w-20">France</Button>
                        <Button stylesClass="   text-xs py-1 w-20">Germany</Button>
                        <Button stylesClass="   text-xs py-1 w-20">Netherlands</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}