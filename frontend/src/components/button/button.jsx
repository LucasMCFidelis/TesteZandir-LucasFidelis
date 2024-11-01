import './button.css'

export function Button({text, icon, ...props}){
    return (
        <button {...props}>
            {icon}
            {text}
        </button>
    )
}