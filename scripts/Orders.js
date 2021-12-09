import { getMetals, getStyles, getSizes, getOrders } from "./database.js"

const buildOrderListItem = (order) => {
    const jewels = getStyles()
    const sizes = getSizes()
    const metals = getMetals()
    const chosenMetal = metals.find((metal) => {return metal.id === order.metalId});
    const chosenSize = sizes.find((size) => {return size.id === order.sizeId});
    const chosenStyle = jewels.find((style) => {return style.id === order.styleId});
    const totalPrice = chosenMetal.price + chosenSize.price + chosenStyle.price;
    return `<li>
        Order #${order.id} costs $${totalPrice.toFixed(2)}
    </li>`
};

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
};