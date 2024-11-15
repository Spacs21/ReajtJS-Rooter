export const initialState = JSON.parse(localStorage.getItem("storage")) || {
    wishlist: [],
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
        default:
            return state
    }
}