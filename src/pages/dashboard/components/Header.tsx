import Icon from '@components/icons'

type Props = {}

const Header = (props: Props) => {
    return (
        <div className="flex justify-between h-[89px] bg-white content-center items-center px-9 rounded-2xl">
            <div className="search">
                <label className="relative ">
                    <Icon name="chevRight" className="absolute top-0 left-2 " />
                    <input
                        className="rounded border w-18 h-12 pr-3.5 pl-8 py-2.5"
                        placeholder="Search"
                    ></input>
                </label>
            </div>
            <div>
                <div className="date">
                    <span>Saturday,may 3,2023</span>
                </div>
                <div>
                    <div className="badge"></div>
                    <Icon name="dashboard" />
                </div>
            </div>
        </div>
    )
}

export default Header