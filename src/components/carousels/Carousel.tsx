import { Children, cloneElement, useEffect, useRef, useState } from "react";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

const Carousel = ({ children }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<any>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  const ref = useRef<any>(null);

  const scroll = (scrollOffset) => {
    console.log("i just no wan work", ref, scrollOffset)
    ref.current.scrollX = 30;
  };
  /*  useEffect(() => {
     resetTimeout();
     timeoutRef.current = setTimeout(
       () =>
         setIndex((prevIndex) =>
           prevIndex === colors.length - 1 ? 0 : prevIndex + 1
         ),
       delay
     );
 
     return () => {
       resetTimeout();
     };
   }, [index]);
  */



  return (
    <>
      <div className="slideshowSlider" ref={ref}
      >
        {children}

      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => scroll(-20)}
          ></div>
        ))}
      </div>
    </>
  );
}

export default Carousel

