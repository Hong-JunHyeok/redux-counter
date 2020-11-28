// import Counter from "../components/Counter";
// import * as actions from "../actions";
// import { connect } from "react-redux";

// export function getRandomColor() {
//     const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

//     const random = Math.floor(Math.random() * 6);

//     return colors[random];
// }

// //store안에 state값들을 props에 연결시킨다
// const mapStateToProps = (state) => ({
//     color: state.colorData.color,
//     number: state.numberData.number,
// });

// //액션을 생성
// const mapDispatchToProps = (dispatch) => ({
//     onIncrement: () => dispatch(actions.increment()),
//     onDecrement: () => dispatch(actions.decrement()),
//     onSetColor: () => {
//         const color = getRandomColor();
//         dispatch(actions.set_color(color));
//     },
// });

// const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

// export default CounterContainer;
