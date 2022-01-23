import { useState } from 'react';

const NewUserFormValid = (props) => {
    const [firstName, setFirstName] = useState("");
    
    
    const [lastName, setLastName] = useState("");
    
    
    const [email, setEmail] = useState("");
    
    
    const [password, setPassword] = useState("");
    
    
    const [confirmPassword, setConfirmPassword] = useState("");
    


    
    const createUser = (e) => {
        e.preventDefault();

        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        };
        console.log("Howdy", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

    };

    return (
        <>
            <form onSubmit = { createUser }>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={ firstName } onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                {firstName.length < 2 && <h4>First name must be at least 2 characters</h4>}
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={ lastName } onChange={ (e) => setLastName(e.target.value) } />
                </div>
                {lastName.length < 2 && <h4>Last name must be at least 2 characters</h4>}
                <div>
                    <label>Email: </label>
                    <input type="text" value={ email } onChange={ (e) => setEmail(e.target.value) } />
                </div>
                {email.length < 5 && <h4>Email must be at least 5 characters</h4>}
                <div>
                    <label>Password: </label>
                    <input type="password" value={ password } onChange ={ (e) => setPassword(e.target.value)} />
                </div>
                {password.length < 8 && <h4>Password must be at least 8 characters</h4>}
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={ confirmPassword } onChange ={ (e) => setConfirmPassword(e.target.value) } />
                </div>
                { password != confirmPassword && <h4>Passwords must match</h4>}
                <input type="submit" value="Create User" />
                
            </form>

            <h2>Your Form Data</h2>

            <div>
                <h3>First Name: { firstName } </h3>
                <h3>Last Name: { lastName } </h3>
                <h3>Email Name: { email } </h3>
                <h3>Password Name: { password } </h3>
                <h3>Confirm Password Name: { confirmPassword } </h3>
            </div>
        </>
    );
};

export default NewUserFormValid;