import { types } from '../types/types';
import axios from 'axios';


//SEARCH

export const searchAsyn = (product) => {

    return async (dispatch) => {


    }
}


export const searchSync = (product) => {
    console.log(product);
    return {

        type: types.search,
        payload: product
    }
}

//READ

export const listProductAsync = () => {
    return async (dispatch) => {
        axios
            .get(
                `https://recipe-rissoto.vercel.app/recipe`
            )
            .then((resp) => {
                console.log(resp.data);
                dispatch(listSync(resp.data));
            })
            .catch((error) => {
                console.log(error);
            });
            
    }
  
}


export const listSync = (product) => {
    return {
        type: types.list,
        payload: product
    }
}
export const carrito = (product) => {
    return {
        type: types.carrito,
        payload: product
    }
}

export const carritoP = (product) => {
    return {
        type: types.carrito,
        payload: product
    }
}
export const carritoUdapte = (product) => {
    return {
        type: types.carritoUpdate,
        payload: product
    }
}
