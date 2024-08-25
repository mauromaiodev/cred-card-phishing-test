type InputProps = {
    placeholder: string
    typeText: 'text' | 'search' | 'password' | 'date' | 'time' | 'filter' | 'number' | 'tel'
    label?: string
}

export const Input = ({ placeholder, typeText, label }: InputProps) => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <label htmlFor="">{label}</label>
            <input className="w-1/2 h-12 rounded-lg border border-zinc-500 text-black" placeholder={placeholder} />
        </div>
    )
}