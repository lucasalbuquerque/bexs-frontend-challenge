import * as CreditCardTypes from "./types";

export function send(value){
    return {
        type: CreditCardTypes.SEND,
        payload: {
            value: value
        }
    }
}
