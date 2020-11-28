import { func } from "prop-types";
import * as types from "../actions/ActionTypes";

//초기상태를 정의
const initState = {
    color: "black",
    number: 0,
};

function counter(state = initState, action) {
    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: state.number + 1,
            };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1,
            };
        case types.SET_COLOR:
            return {
                ...state,
                color: action.color,
            };
        default:
            // return state;
            return state;
    }
}

export default counter;