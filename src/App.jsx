import { useEffect, useRef } from "react";
import text from "./data/content";
import Sections from "./components/Sections";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";

function App() {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = (e) => {
      container.scrollLeft += e.deltaY;
      e.preventDefault();
    };

    container.addEventListener("wheel", handleScroll);

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        ref={containerRef}
        className="wrapper relative w-full h-screen whitespace-nowrap overflow-x-scroll scroll flex"
      >
        {text.map((item, index) => {
          return (
            <Sections
              index={item.index}
              title={item.title}
              message={item.message}
            />
          );
        })}
        <Gallery/>
      </div>
    </div>
  );
}

export default App;
