/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    styles: [
        { id: 1, style: "Classic", price: 500 },
        { id: 2, style: "Modern", price: 710 },
        { id: 3, style: "Vintage", price: 965 }
    ],
    sizes: [
        { id: 1, carets: 0.5, price: 405 },
        { id: 2, carets: 0.75, price: 782 },
        { id: 3, carets: 1, price: 1470 },
        { id: 4, carets: 1.5, price: 1997 },
        { id: 5, carets: 2, price: 3638 }
    ],
    metals: [
        { id: 1, metal: "Sterling Silver", price: 12.42 },
        { id: 2, metal: "14K Gold", price: 736.4 },
        { id: 3, metal: "24K Gold", price: 1258.9 },
        { id: 4, metal: "Platinum", price: 795.45 },
        { id: 5, metal: "Palladium", price: 1241.0 }
    ],
    customOrders: [
        {
            id: 1,
            metalId: 3,
            sizeId: 2,
            styleId: 3,
            timestamp: 1614659931693
        }
    ],
    orderbuilder: {}
};
export const getOrders =() => {
    return database.customOrders.map(order => ({...order}))
}
export const getStyles = () => {
    return database.styles.map(style => ({...style}))
};
export const getSizes = () => {
    return database.sizes.map(size => ({...size}))
};
export const getMetals = () => {
    return database.metals.map(metal => ({...metal}))
};

export const setMetal = (id) => {
    database.orderbuilder.metalId = id
};
export const setSize = (id) => {
    database.orderbuilder.sizeId = id
};
export const setStyle = (id) => {
    database.orderbuilder.styleId = id
};

export const combinedResult = () => {
    
    
    const lastIndex = database.customOrders.length - 1
    const newOrder = {...database.customOrders[lastIndex]}

    newOrder.id = database.customOrders[lastIndex].id + 1 
    newOrder.timestamp = Date.now()
    newOrder.metalId = database.orderbuilder.metalId
    newOrder.sizeId = database.orderbuilder.sizeId
    newOrder.styleId = database.orderbuilder.styleId

    database.customOrders.push(newOrder)

    database.orderbuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
};