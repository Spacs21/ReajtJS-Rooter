export const initialState = JSON.parse(localStorage.getItem("storage")) || {
    wishlist: [],
    cart: [],
    token: null,
    user: null,
    name: null
}
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const reducer = (state, action)=> {
    const notify = () => toast("Wow so easy!");
    let result = state
    switch(action.type){
        case "ADD_WISHLIST":
            let index = state.wishlist.findIndex(pro => pro.id === action.payload.id)
            if(index < 0){
                result = {...state, wishlist: [...state.wishlist, action.payload]}
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            }else{
                result = {...state, wishlist: state.wishlist.filter(pro => pro.id !== action.payload.id)}
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            }
        case "ADD_CART":
            let cartIndex = state.cart.findIndex(pro => pro.id === action.payload.id)
            if(cartIndex < 0){
                result = {...state, cart: [...state.cart, {...action.payload, amount: 1} ]}
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            }else{
                result = {...state, cart: state.cart.map((pro, inx) => (
                    cartIndex === inx ? {...pro, amount: pro.amount + 1} : pro
                ))}
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            }
        case "DEC_CART":
            let decIndex = state.cart.findIndex(pro => pro.id === action.payload.id)
            result = {...state, cart: state.cart.map((pro, inx) => (
                decIndex === inx ? {...pro, amount: pro.amount - 1} : pro
            ))}
            localStorage.setItem("storage", JSON.stringify(result))
            return result
        case "REMOVE_CART":
            result = {...state, cart: state.cart.filter(item=> item.id !== action.payload.id)}
            localStorage.setItem("storage", JSON.stringify(result))
            return result
        case "CLEAR_CART":
            result = {state, cart: []}
            localStorage.setItem("storage", JSON.stringify(result))
            return result
        case "ADD_TOKEN":
            result = {...state, token: action.payload}
            localStorage.setItem("storage", JSON.stringify(result))
            return result
            case "ADD_USER":
                result = {...state, user: action.payload}
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            case "ADD_NAME":
                result = {...state, name: action.payload}
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            default:
            return state
    }
}