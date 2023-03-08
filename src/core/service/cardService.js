
export function getCardById(items,id) {
    return {...items.filter(e => e.id==id)[0]};//returns a deep copy 
}