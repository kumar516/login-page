import { USER_LIST } from "./constants";

export const GetList = (data) => {
    return (dispatch) => {
        dispatch({
            type: USER_LIST,
            payload: data
        })
    }
}
