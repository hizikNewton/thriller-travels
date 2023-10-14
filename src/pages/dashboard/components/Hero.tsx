import Button from "@components/button"
import Icon from "@components/icons"

type Props = {}

const Hero = (props: Props) => {
    return (
        <div className="heroContainer">
            <div className="backgroundImage h-44  w-full" style={{ backgroundImage: `url(${"src/assets/london.jpg"})` }} />
            <div className="filter-container h-[84px] relative">
                <div className="filter w-full h-full  absolute -top-8">
                    <div className=" mx-20 border h-full bg-white items-center gap-x-14 flex">
                        <div className="flex w-full border border-green ">
                            <div className="search h-[60px] ml-12">
                                <label className="relative">
                                    <Icon name="chevRight" className="absolute top-0 left-2 " />
                                    <input
                                        className="rounded border  h-full pr-3.5 pl-8 py-2.5"
                                        placeholder="Search"
                                    ></input>
                                    <Icon name="chevRight" className="absolute top-0 left-2 " />
                                </label>
                            </div>
                            <div className="search h-[60px] ">
                                <label className="relative">
                                    <Icon name="chevRight" className="absolute top-0 left-2 " />
                                    <input
                                        className="rounded border w-full h-full pr-3.5 pl-8 py-2.5"
                                        placeholder="Search"
                                    ></input>
                                    <Icon name="chevRight" className="absolute top-0 left-2 " />
                                </label>
                            </div>
                            <div className="search h-[60px] ">
                                <label className="relative">
                                    <Icon name="chevRight" className="absolute top-0 left-2 " />
                                    <input
                                        className="rounded border w-full h-full pr-3.5 pl-8 py-2.5"
                                        placeholder="Search"
                                    ></input>
                                    <Icon name="chevRight" className="absolute top-0 left-2 " />
                                </label>
                            </div>
                        </div>
                        <Button />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero