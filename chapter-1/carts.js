import generateElement from "./generateElement.js"

function generateCart(name, age) {

    const cart = generateElement(
        'div', {
        class: 'cart'
    },
        generateElement('span', null, `name: ${name}`),
        generateElement('span', null, `age: ${age}`)
    )

    return cart
}

const userData = [
    { name: 'Mohammad', age: 26 },
    { name: 'amin', age: 29 },
    { name: 'Ali', age: 60 },
    { name: 'Farahnaz', age: 47 }
]

const container = generateElement('div', {
    class: 'container'
})

userData.forEach(data => {
    container.appendChild(generateCart(data.name, data.age))
})



export default container;
