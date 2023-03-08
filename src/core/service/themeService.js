import { useEffect } from "react";
import { useSelector } from "react-redux";

function useThemeService(themeRef) {
    const isDarkMode = useSelector((state) => state.modal.isDarkMode);

    useEffect(() => {
        if (isDarkMode) {
            themeRef.current.classList.add('dark-box');
        } else {
            themeRef.current.classList.remove('dark-box');
        }
    }, [isDarkMode])
    return ;
}

export default useThemeService