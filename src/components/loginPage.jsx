import React, { useEffect, useState, useRef } from "react";
import "../css/loginPage.css";
import { connect } from 'react-redux';
import { GetList } from '../actions/loginPageActions';
import { Redirect } from 'react-router-dom';

const LoginPage = (props) => {
    const [checked, setChecked] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const [usernameErr, setUsernameErr] = useState("");
    const [pwdErr, setPwdErr] = useState("");
    const [login, setLogin] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
        let users = [{
            "username": "hruday@gmail.com",
            "password": 'hruday123'
        }]
        props.GetList(users)
    },[])

    const onUsername = (e) => {
        setUsernameErr("")
        setUsername(e.target.value)
    }

    const onPassword = (e) => {
        setPwdErr("")
        setpassword(e.target.value)
    }

    const onLogin = () => {
        if (username === "" || password === "") {
            if (username === "") {
                setUsernameErr("This field should not be empty!")
            }
            if (password === "") {
                setPwdErr("This field should not be empty!")
            }
        }
        else {
            if (props.userList.length) {
                if (props.userList.some(res => res.username === username) === true) {
                    let currentUser = props.userList.filter(li => li.username === username)
                    if (currentUser[0].password === password) {
                        setLogin(true)
                    }
                    else {
                        setPwdErr("Incorrect Password!")
                    }
                }
                else {
                    setUsernameErr("Invalid User!")
                }
            }
        }
    }

    const handleKeypress = (e) => {
        if (e.charCode === 13) {
            onLogin()
        }
    }

    if (login) {
        return <Redirect to="/home" />
    }

    return (
        <div className="login_container">
            <div className="login_page">
                <div className="main_txt">Login</div>
                <div className="userInput_field">
                    <i className="glyphicon glyphicon-user user_icon" />
                    <input
                        className="input_field"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={onUsername}
                        onKeyPress={handleKeypress}
                        ref={inputRef}
                    />
                    {usernameErr !== "" && <div className="err_msg">{usernameErr}</div>}
                </div>
                <div className="userInput_field">
                    <i className="glyphicon glyphicon-lock user_icon" />
                    <input
                        className="input_field"
                        type={checked === true ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={onPassword}
                        onKeyPress={handleKeypress}
                    />
                    <div className="show_pwd_con">
                        <input type="checkbox" checked={checked} onChange={() => { setChecked(!checked) }} />
                        <div className="pwd_txt" onClick={() => { setChecked(!checked) }}>Show Password</div>
                    </div>
                    {pwdErr !== "" && <div className="err_msg">{pwdErr}</div>}
                </div>
                <button onClick={onLogin}>Login</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    userList: state.userList
})

const mapDispatchToProps = dispatch => ({
    GetList: (data) => dispatch(GetList(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
