import { EMPLOYEE_LIST } from "./constants";

export const EmployeeList = (data) => {
    return (dispatch) => {
        dispatch({
            type: EMPLOYEE_LIST,
            payload: data
        })
    }
}