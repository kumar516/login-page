import { USER_LIST, EMPLOYEE_LIST } from "../actions/constants";

export default function Reducers(state = {}, action) {
    switch (action.type) {
        case USER_LIST:
            return ({ ...state, userList: action.payload })
        case EMPLOYEE_LIST:
            return ({ ...state, employeeList: action.payload })
        default:
            return state;
    }
}