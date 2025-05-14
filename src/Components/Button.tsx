interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
    stylesClass: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}
export default function Button( props: Props){
    const {children, stylesClass, onClick} = props

    return(
        <button 
            className={`${stylesClass} flex items-center justify-center shadow-[0px_0px_4px_gray] rounded `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}