import React, { useState } from 'react'

const UserForm = () => {

    // const [state, dispatch] = useContext(Context)
    // const [user, setUser] = useState("");

    // const translateToSnake = () => {
    //     const request = {
    //         user_first_name: this.state.userFirstName,
    //         user_last_name: this.state.userLastName,
    //         user_user_name: this.state.userUserName,
    //         user_email: this.state.userEmail,
    //     }

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = this.translateToSnake()
        this.props.addUser(user)
    }
    
    return (
        <div className="user-form-container">
            <h3>Create Account</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userFirstName">
                    <input type="text" name="userFirstName" placeholder="First Name" />
                </label>
                <br/>
                <label htmlFor="userLastName">
                    <input type="text" name="userLastName" placeholder="Last Name" />
                </label>
                <br/>
                <label htmlFor="userUserName">
                    <input type="text" name="userUserName" placeholder="User Name" />
                </label>
                <br/>
                <label htmlFor="userEmail">
                    <input type="text" name="userEmail" placeholder="Email" />
                </label>
                <br/>
                <label htmlFor="userPassword">
                    <input type="text" name="userPassword" placeholder="Password" />
                </label>
                <div>
                    <button type="submit" className="btn btn-outline-primary">Create Account</button>
                </div>
            </form>
        </div>
    )

}

export default UserForm