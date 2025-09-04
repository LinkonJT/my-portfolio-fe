import { Button } from "flowbite-react";
import { GoMoveToTop } from "react-icons/go";

const GoTop = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scroll
    });
  };

  return (

    //this will keep the button on the right side 
    // <button 
    //   onClick={scrollToTop}
    //   className="fixed bottom-20 top-140 right-5 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
    // >
    //   Top <GoMoveToTop />
    // </button>

    <div className="relative w-full h-full mt-11">
      <button
        onClick={scrollToTop}
        className="absolute bottom-0 right-38 md:right-148  hover:bg-sky-500 dark:hover:bg-sky-600 bg-sky-700 dark:bg-sky-700 text-white px-4 py-2 rounded-full shadow-lg transition flex items-center gap-2"
      >
        Top <GoMoveToTop className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
};

export default GoTop;
