import Icon from "@components/icons";
import { useEffect, useRef, useState } from "react";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

const Carousel = ({ children }) => {
    const elementRef = useRef(null);
    const [arrowDisable, setArrowDisable] = useState(true);

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef<any>(null);


    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }


    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => handleHorizantalScroll(elementRef.current, 25, 100, 10),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [elementRef.current]);



    const handleHorizantalScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
            if (element.scrollLeft === 0) {
                setArrowDisable(true);
            } else {
                setArrowDisable(false);
            }
        }, speed);
    };
    const goLeft = () => handleHorizantalScroll(elementRef.current, 25, 100, -10);

    const goRight = () => handleHorizantalScroll(elementRef.current, 25, 100, 10);
    return (
        <>
            <div className="button-contianer absolute top-0 right-0 flex gap-x-1">

                <button onClick={goLeft} disabled={arrowDisable} className="0 hover:bg-brand-600/10 active:bg-brand-700/10  flex items-center justify-center rounded-xl border-2 p-1 transition duration-200 hover:cursor-pointer">
                    <Icon name="chevRight" />
                </button>
                <button onClick={goRight} className="hover:bg-brand-600/10 active:bg-brand-700/10  flex items-center justify-center rounded-xl border-2 p-1 transition duration-200 hover:cursor-pointer">
                    <Icon name="chevRight" />
                </button>
            </div>
            <div className=" no-scrollbar img-container flex space-x-6" ref={elementRef}>
                {children}
            </div>
            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                    ></div>
                ))}
            </div>
        </>
    );
};
export default Carousel;
