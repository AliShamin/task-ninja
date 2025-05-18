import "./Cards.css";
import Card from "../card/Card";
import { useSelector } from 'react-redux'
import { ticketType } from "../../core/constant/constants";
import FilterWidget from "../filterWidgets/FilterWidget";
import { useEffect, useState } from "react";
import { compareDates } from "../../core/helpers/commonUtil";
import EmptyBucketStatus from "../emptyBucketStatus/EmptyBucketStatus";
import { useRef } from "react";
import useThemeService from "../../core/service/themeService";

function Cards() {
    const items = useSelector((state) => state.card.item);
    const filters = useSelector((state) => state.filter.items);
    const [filteredItems, setFilteredItems] = useState(items);
    const themeRef = useRef();
    useThemeService(themeRef, 'dark-box');
    useEffect(() => {
        applyFiltersIfAny();
    }, [filters])

    useEffect(() => {
        applyFiltersIfAny();
    }, [items])

    const applyFiltersIfAny = () => {
        if (filters.length > 0) {
            let filteredItems = []
            const impFilters = filters.filter(e => e.filterType == 'imp');
            const ascFilter = filters.filter(e => e.filterType == 'asc');
            /**
             * First apply imp filters if any
             */
            if (impFilters.length > 0) {
                filteredItems = impFilters.reduce(applyReducer, items);
            }
            /**
             * Apply sort filters if any  
             */
            if (ascFilter.length > 0) {
                filteredItems = ascFilter.reduce((a, c) => {
                    const itemsForSortFilter = a.filter(i => i.cardType == c.cardType);
                    const remainingItems = a.filter(i => i.cardType != c.cardType)
                    const sortedItems = itemsForSortFilter.slice().sort((a, b) => {
                        if ((a.cardType === b.cardType && b.cardType === c.cardType) && compareDates(a.creationDate, b.creationDate) > 0) {
                            return -1;
                        }
                        return 0;
                    })
                    return [...sortedItems, ...remainingItems];
                }, filteredItems.length > 0 ? filteredItems : items);
            }
            setFilteredItems(filteredItems);

        } else {
            setFilteredItems(items);
        }
    }
    const applyReducer = (a, c) => {
        return a.filter(i => !(i.cardType == c.cardType && !i.isImp))
    }

    return (
        <>
            <section ref={themeRef} className="align-center d-flex-column bg-grey">
                <div className="cards-container ">
                    <div className="d-flex-row space-btw">
                        {ticketType.map(e =>
                            <div className="w15" key={e}>
                                <header id="card-header" className="f12 d-flex-row space-btw">{e.toUpperCase()}<FilterWidget cardType={e} /></header>
                            </div>)
                        }
                    </div>
                    <div className="d-flex-row space-btw" id="card-items-box">
                        {items.length > 0 ?
                            ticketType.map(e =>
                                <div className="d-flex-column w15" key={e}>
                                    {filteredItems.map(i => (i.cardType == e && <Card data={i} key={i.id} />))}
                                </div>) :
                            <EmptyBucketStatus />
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cards;