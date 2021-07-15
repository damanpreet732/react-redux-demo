import { BUY_CAKE } from "./cakeType";

// action creaters 
export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number,
    }
}