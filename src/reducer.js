import { add_city } from "./const";

export default function rootReducer(state,action){
    switch (action.type) {
        case add_city:
            console.log(action.payload)
            return {...state,cities:[...state.cities,action.payload]}
        default:
            return state
    }
}