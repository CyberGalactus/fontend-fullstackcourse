import {Form} from ""

const SignUp = () => {
    return (
        <div>
            <h2></h2>
            <Form method="post"/>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" required></input>
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="password" name="password" id="password" required></input>
            </div>
            <div>
                <label htmlFor="password_confirmation">password confirmation</label>
                <input type="password" name="password_confirmation" id="password_confirmation" required></input>
            </div>
            
        </div>
    )
}

export default SignUp