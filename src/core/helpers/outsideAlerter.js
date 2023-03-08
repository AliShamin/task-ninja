import { useEffect } from "react";
/**
  * Hook that alerts clicks outside of the passed ref
  */
function useOutsideAlerter(eventToAdd){
        // Bind the event listener
        document.addEventListener("mousedown", eventToAdd);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", eventToAdd);
        };
}

export default useOutsideAlerter;