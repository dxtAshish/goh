import {CHANGE_VARIABLE} from "../actions/type"
const INITIAL_STATE = {
    categories_array: null,
    categoriesall_array: null,
    banners:[],
    products_array:null,
    category_banner:"",
    productData:"",
    new_products_arrival:null,
    products_home:[],
    order_status:"",

    cart:[],
    cart_products:[],
    coupon_applied:false,
    coupon:"",
    searched_products:[],

    pages:"",
    currentPage:null,
    mastHead:null,
    toast_display:false,
    toast_message:"",
    toast_status:"",
    display_dropdown:false,
    
    authorized:false,
    user_data:"",

    orders_array:[]
}

const a = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CHANGE_VARIABLE:
      		return {...state, [ action.payload.key]: action.payload.value }
        default:
            return state
    }
}

export {a as default}