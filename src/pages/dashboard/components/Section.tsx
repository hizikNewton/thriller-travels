import { FC, PropsWithChildren } from "react"

interface Props {
    headerText: string
    HeaderAction?: any
    carousel?: boolean
}

const Section: FC<PropsWithChildren<Props>> = ({ carousel, headerText, HeaderAction, children }) => {
    return <section className=" mb-6 w-full relative">
        <div className=" flex justify-between section-header mb-8">
            <h3 className=" text-xl">{headerText}</h3>
            <span className=" text-sm">{HeaderAction && (typeof HeaderAction === "string" ? HeaderAction : HeaderAction())}</span>
        </div>
        <div className={` no-scrollbar ${carousel ? "" : "flex space-x-6 overflow-x-scroll"}`}>
            {children}
        </div>
    </section>
}

export default Section