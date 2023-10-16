import Icon from '@components/icons'


const Header = () => {
    return (
        <div className="col-start-2 col-end-3 flex justify-between h-[89px] w-full  bg-white content-center items-center px-9 rounded-2xl">
            <div className="search">
                <label className="relative ">
                    <Icon name="search" className="absolute top-0 left-2 " />
                    <input
                        className="rounded border w-18 h-12 pr-3.5 pl-8 py-2.5"
                        placeholder="Search any things..."
                    ></input>
                </label>
            </div>
            <div className='flex items-center gap-4'>
                <div className="date">
                    <span>Saturday,may 3,2023</span>
                </div>
                <div>
                    <div className="badge"></div>
                    <button className=" relative hover:bg-brand-600/10 active:bg-brand-700/10  flex items-center justify-center rounded-xl border-2 p-1 transition duration-200 hover:cursor-pointer">

                        <Icon name="notif" />
                        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -left-3 dark:border-gray-900">3</div>

                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header