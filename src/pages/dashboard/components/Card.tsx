import Icon from "@components/icons"
import { FC } from "react"
interface Props {
}

const Card: FC<Props> = () => {
    return (
        <div className="card-container flex flex-shrink-0 gap-x-4 max-w-[403px] p-3 bg-white slide">
            <div className="backgroundImage w-24 h-24 flex-shrink-0" style={{ backgroundImage: `url(${"src/assets/london.jpg"})` }}>
                {/* <img src={'src/assets/london.jpg'} alt="" /> */}
            </div>
            <div >
                <h3>Montmartre, France</h3>
                <p className="mt-2 mb-3">visiting the best tourist areas chosen by the audience</p>
                <p>$450,000,000</p>
            </div>
            <div>
                <span className="flex">
                    <Icon name="chevRight" />
                    <span>4/5</span>
                </span>
            </div>
        </div>
    )
}

const Card2 = () => {
    return (
        <div className="card2-container w-fit h-60 p-2 bg-white rounded-2xl">
            <div className="backgroundImage w-52 h-28 flex-shrink-0 mb-7 rounded-xl" style={{ backgroundImage: `url(${"src/assets/london.jpg"})` }} />
            <div >
                <p>7 Season Apartment</p>
                <div className=" my-2">
                    <span className="flex">
                        <Icon name="chevRight" />
                        <span>Hungary Budapest</span>
                    </span>
                </div>
                <p>$65 / night</p>
            </div>
        </div>
    )
}

const cards = { Card, Card2 }
export default cards