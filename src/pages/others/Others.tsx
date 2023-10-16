import { FC } from 'react'

interface Props {
    name: string
}

const Others: FC<Props> = ({ name }) => {
    return (
        <div>{name}</div>
    )
}

export default Others