import './button.css'

export function Button({text, icon, onClickFunction}){
    return (
        <button onClick={onClickFunction}>
            {icon}
            {text}
        </button>
    )
}