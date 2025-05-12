import { useEffect } from "react";
import { useSelector } from "react-redux";

function useThemeService(themeRef, appliedClass) {
    const isDarkMode = useSelector((state) => state.modal.isDarkMode);

    useEffect(() => {
        if (isDarkMode) {
            themeRef.current.classList.add(appliedClass);
        } else {
            themeRef.current.classList.remove(appliedClass);
        }
    }, [isDarkMode])
    return ;
}

export default useThemeService