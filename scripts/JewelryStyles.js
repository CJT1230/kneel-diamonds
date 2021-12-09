import { getStyles, setStyle } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    const listItemsArray = styles.map(style => {
        return `<ul>
            <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </ul>`
    })


    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

