export const addUser = (user) => {
    return (dispatch) => {
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({user: user})
        })
        .then((obj) => obj.json())
        .then((obj) => dispatch({ type: 'ADD_USER', payload: obj }))
    }
}