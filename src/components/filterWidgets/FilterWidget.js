import "./FilterWidget.css";
import { MdFilterList } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilter, removeFilter } from "../../core/redux/filterSlice";
import useOutsideAlerter from "../../core/helpers/outsideAlerter";

function FilterWidget(props) {
    const [showOptions, setShowOptions] = useState(false);
    const existingFilters = useSelector((state) => state.filter.items);
    const dispatch = useDispatch();
    const [selectdFilter, setSelectedFilter] = useState({ 'impSelected': false, 'ascSelected': false })
    const ref = useRef(null);
    
    useOutsideAlerter((e) => {
        if (ref.current != null && !ref.current.contains(e.target)) { setShowOptions(false) }
    })

    useEffect(() => {
        existingFilters.forEach(e => {
            if (e.filterType == 'imp' && e.cardType == props.cardType) {
                setSelectedFilter({ ...selectdFilter, 'impSelected': true })
            }
            if (e.filterType == 'asc' && e.cardType == props.cardType) {
                setSelectedFilter({ ...selectdFilter, 'ascSelected': true })
            }
        })
    }, [])

    const changeFilter = (filterType) => {
        /**
         * if filter selected , unselect
         */
        if (filterType == 'imp' && selectdFilter.impSelected) {
            setSelectedFilter({ ...selectdFilter, 'impSelected': false });
            dispatch(removeFilter({ 'filterType': filterType, 'cardType': props.cardType }))
        } else if (filterType == 'imp' && !selectdFilter.impSelected) {
            setSelectedFilter({ ...selectdFilter, 'impSelected': true })
            dispatch(addFilter({ 'filterType': filterType, 'cardType': props.cardType, 'isApplied': true }))
        }

        if (filterType == 'asc' && selectdFilter.ascSelected) {
            setSelectedFilter({ ...selectdFilter, 'ascSelected': false });
            dispatch(removeFilter({ 'filterType': filterType, 'cardType': props.cardType }))
        } else if (filterType == 'asc' && !selectdFilter.ascSelected) {
            setSelectedFilter({ ...selectdFilter, 'ascSelected': true })
            dispatch(addFilter({ 'filterType': filterType, 'cardType': props.cardType }))
        }

    }

    const changeShowOptions = () => {
        if (showOptions) {
            setShowOptions(false);
        } else {
            setShowOptions(true);
        }
    }

    return (
        <>
            <div className="p-relative d-flex-row align-center">
                <MdFilterList size='16' onClick={changeShowOptions} className='cursor-pointer' />
                {showOptions &&
                    <div id="widged-option-container" className="curved-box" ref={ref}>
                        <div>
                            <span className="cursor-pointer" onClick={() => { changeFilter('imp') }}>imp</span>
                            {selectdFilter.impSelected && <AiOutlineCheck color='green' />}
                        </div>
                        <div>
                            <span className="cursor-pointer" onClick={() => { changeFilter('asc') }}>most recent</span>
                            {selectdFilter.ascSelected && <AiOutlineCheck color='green' />}
                        </div>
                    </div>
                }
            </div>
        </>
    );
}

export default FilterWidget;