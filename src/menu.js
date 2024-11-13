import classicBeefBulgogi from "./media/menu/classic-beef-bulgogi.jpg";
import spicyBeefBulgogi from "./media/menu/spicy-bulgogi.jpg";
import bulgogiWraps from "./media/menu/bulgogi-wraps.jpeg";
import bulgogiBibimbap from "./media/menu/bulgogi-bibimbap.webp";

let menu = [
    {
        name: "Classic Beef Bulgogi",
        img: classicBeefBulgogi,
        price: 1059 ,
        description: "Tender marinated beef, grilled to perfection with savory soy, sesame oil, garlic, and a hint of sweetness. Served with steamed rice, kimchi, and pickled vegetables."
    },
    {
        name: "Spicy Bulgogi",
        img: spicyBeefBulgogi,
        price: 1119,
        description: "A fiery twist on the classic! Marinated in spicy gochujang for a bold, spicy flavor. Served with rice and traditional sides."
    },
    {
        name: "Bulgogi Wraps",
        img: bulgogiWraps,
        price: 839,
        description: "Grilled bulgogi served with fresh lettuce, garlic, green onions, and ssamjang (spicy dipping sauce), wrapped in lettuce."
    },
    {
        name: "Bulgogi Bibimbap",
        img: bulgogiBibimbap,
        price: 1007,
        description: "A sizzling hot stone bowl with rice, crispy veggies, bulgogi, a fried egg, and gochujang sauce."
    }
]

export default menu