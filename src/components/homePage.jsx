import React, { useEffect } from "react";
import "../css/homePage.css";
import { connect } from 'react-redux';
import { EmployeeList } from '../actions/homePageActions';

const HomePage = (props) => {
    useEffect(() => {
        let users = [{
            "id": 1,
            "name": "test1",
            "age": "11",
            "gender": "male",
            "email": "test1@gmail.com",
            "phoneNo": "9415346313"
        },
        {
            "id": 2,
            "name": "test2",
            "age": "12",
            "gender": "male",
            "email": "test2@gmail.com",
            "phoneNo": "9415346314"
        },
        {
            "id": 3,
            "name": "test3",

            "age": "13",
            "gender": "male",
            "email": "test3@gmail.com",
            "phoneNo": "9415346315"
        },
        {
            "id": 4,
            "name": "test4",
            "age": "14",
            "gender": "male",
            "email": "test4@gmail.com",
            "phoneNo": "9415346316"
        },
        {
            "id": 5,
            "name": "test5",
            "age": "15",
            "gender": "male",
            "email": "test5@gmail.com",
            "phoneNo": "9415346317"
        },
        {
            "id": 6,
            "name": "test6",
            "age": "16",
            "gender": "male",
            "email": "test6@gmail.com",
            "phoneNo": "9415346318"
        }]
        props.EmployeeList(users)
    },[])

    return (
        <div className="homePage_container">
            <div className="home_page_heading">
                <div className="heading_txt">Employee List</div>
            </div>
            <div className="table_container">
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Phone No.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(props.employeeList !== undefined) && props.employeeList.map(res=>
                                <tr key={res.id}>
                                    <td>{res.name}</td>
                                    <td>{res.age}</td>
                                    <td>{res.gender}</td>
                                    <td>{res.email}</td>
                                    <td>{res.phoneNo}</td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    employeeList: state.employeeList
})

const mapDispatchToProps = dispatch => ({
    EmployeeList: (data) => dispatch(EmployeeList(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
