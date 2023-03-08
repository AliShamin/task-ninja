
export function saveItem(name,value){
    localStorage.setItem(name,JSON.stringify(value));
}

export function getItem(name){
    return JSON.parse(localStorage.getItem(name))
}
