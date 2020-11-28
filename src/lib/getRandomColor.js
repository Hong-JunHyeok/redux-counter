export default function getRandomColor() {
    const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

    const random = Math.floor(Math.random() * 6);

    return colors[random];
}
