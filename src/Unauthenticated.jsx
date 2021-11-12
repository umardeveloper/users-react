import React from 'react';
import useToken from './Hooks/useToken'

function UnauthenticatedApp() {

    const [setToken] = useToken(true)

    const handleSubmit =(evt) => {
        evt.preventDefault()

        const {username, password} = evt.target.elements
 

        fetch(process.env.REACT_APP_API_URL +'/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
            {
            username: username.value.trim(), 
            password: password.value.trim()
            }
            )
        }).then(response => response.json()).then(data => setToken(data.token))
    }

	return (
		<>
			<h1>Login</h1>

			<form onSubmit={handleSubmit}>
				<div>
					<input type='text' defaultValue='eve.holt@reqres.in' placeholder='username' name='username' />
				</div>

				<div>
					<input type='text' defaultValue='cityslicka' placeholder='password' name='password' />
				</div>

                <button type='submit'>Log In</button>
			</form>
		</>
	);
}

export default UnauthenticatedApp;
