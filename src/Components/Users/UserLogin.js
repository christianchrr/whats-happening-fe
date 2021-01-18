import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const UserLogin = () => {

    // const [state, dispatch] = useContext(Context)
    const [user, setUser] = useState("");

    // const translateToSnake = () => {
    //     const request = {
    //         user_email: this.state.userEmail,
    //         user_password: this.state.userPassword,
    //     }

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = this.translateToSnake()
    }
    
    return (
        <div className="user-form-container">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userEmail">
                    <input type="text" name="userEmail" placeholder="Email" />
                </label>
                <br/>
                <label htmlFor="userPassword">
                    <input type="text" name="userLastName" placeholder="Password" />
                </label>
                <div>
                    <button type="submit" className="btn btn-outline-primary">Login</button>
                </div>
            </form>
            <Link to={`/create-user`}><p>Create Account</p></Link>
        </div>
    )

}

export default UserLogin