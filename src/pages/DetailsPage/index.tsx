import Header from "../../Components/Header"
import MainDetails from "./MainDetails"

interface Props{
    toggleMode: ToggleMode
}

export default function DetailsPage({toggleMode}:Props){
    return(
        <div className=" h-full flex flex-col items-center" >
            <Header/>
            <MainDetails/>
        </div>
    )
}