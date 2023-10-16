import { FC } from "react"

interface Props {
    className: string
}

const Button: FC<Props> = ({ className }) => {
    return (
        <div>
            <button className={`${className} bg-slate-900 h-14 px-9 text-cyan-200`}>Search</button>
        </div>
    )
}

export default Button