interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
    stylesClass: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    toggleMode: ToggleMode
}
export default function Button( props: Props){
    const {children, stylesClass, onClick, toggleMode} = props

    const bgColor = (toggleMode === "light" ? "#ffffff" : "#2b3945")
    return(
        <button 
            className={`${stylesClass} flex items-center justify-center shadow-[0px_0px_4px_gray] rounded `}
            style={{
                background: bgColor
            }}
            onClick={onClick}
        >
            {children}
        </button>
    )
}