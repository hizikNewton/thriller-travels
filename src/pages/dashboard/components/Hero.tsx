import Button from "@components/button"
import Icon from "@components/icons"

type Props = {}

const Hero = (props: Props) => {
    return (
        <div className="heroContainer">
            <div className="backgroundImage h-44  w-full rounded-2xl" style={{ backgroundImage: `url(${"src/assets/london.jpg"})` }} />
            <div className="filter-container h-[84px] relative">
                <div className="filter w-full h-full  absolute -top-8">
                    <div className=" mx-20 border h-full bg-white items-center gap-x-14 rounded-3xl flex">
                        <div className="flex w-full ">
                            <div className="search h-[60px] flex-1 items-center ml-12">
                                <label className="relative ">
                                    <Icon name="location" className="absolute -top-[3px] left-2 " />
                                    <input
                                        className="rounded !outline-none  w-full h-full pr-3.5 pl-8 py-2.5"
                                        placeholder="Where are you going?"
                                    ></input>
                                    <Icon name="arrowDown" className="absolute -top-[3px] right-2 " />
                                </label>
                            </div>
                            <div className="search h-[60px] flex-1 border-l-2 border-r-2 border-black-100 items-center">
                                <label className="relative ">
                                    <Icon name="calendar" className="absolute -top-[3px] left-2 " />
                                    <input
                                        className="rounded !outline-none  w-full h-full pr-3.5 pl-12 py-2.5"
                                        placeholder="Check-in Date"
                                    ></input>
                                    <Icon name="arrowDown" className="absolute -top-[3px] right-2 " />
                                </label>
                            </div>
                            <div className="search h-[60px] flex-1  items-center">
                                <label className="relative ">
                                    <Icon name="user" className="absolute -top-[3px] left-2 " />
                                    <input
                                        className="rounded !outline-none  w-full h-full pr-3.5 pl-12 py-2.5"
                                        placeholder="3 adults"
                                    ></input>
                                    <Icon name="arrowDown" className="absolute -top-[3px] right-2 " />
                                </label>
                            </div>
                        </div>
                        <Button className={"mr-5 rounded-[20px] text-white "} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero