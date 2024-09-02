import React, {useContext, useEffect, useState} from "react"
import {useHttp} from "../hooks/http.hook"
import {useMessage} from "../hooks/message.hook"
import {AuthContext} from "../context/AuthContext"

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try{
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        }catch (e) {}
    }

    const loginHandler = async () => {
        try{
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        }catch (e) {}
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>CSV generate</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Login</span>
                        <div>
                            <div className="input-field">
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    className="input-card-blue"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">E-mail</label>
                            </div>
                            <div className="input-field">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="input-card-blue"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action card-action-form">
                        <button
                            className="btn yellow darken-4"
                            onClick={loginHandler}
                            disabled={loading}>
                            Login
                        </button>
                        <button
                            className="btn gray lighten-1 white-text"
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}