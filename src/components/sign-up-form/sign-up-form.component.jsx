import { useState } from 'react'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component'

import {SignUpContainer} from './sign-up-form.styles.jsx'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword }= formFields


    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (confirmPassword !== password) {
            alert("passwords don not match");
            return
        } 
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields()
        } catch (err) {
            if (err.code === "auth/email-already-in-use") {
                alert('Cannot create user, email already in use')
            } else {
                console.log('user creation encountered an error', err)
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span className='classic-font'>Sign up with your email and password below:</span>
            <form className='classic-font' onSubmit={handleSubmit}>
                <FormInput 
                    label = "Display Name"
                    type="text" 
                    name="displayName" 
                    required 
                    onChange={handleChange} 
                    value={displayName}
                />
                <FormInput 
                    label = "Email"
                    type="email" 
                    name="email" 
                    required 
                    onChange={handleChange} 
                    value={email}
                />
                <FormInput 
                    label = "Password"
                    type="password" 
                    name="password" 
                    required 
                    onChange={handleChange} 
                    value={password}
                />
                <FormInput 
                    label = "Confirm Password"
                    type="password" 
                    name="confirmPassword" 
                    required 
                    onChange={handleChange} 
                    value={confirmPassword}
                />
                <Button type="submit">Sign Up</Button>   
            </form> 
        </SignUpContainer>
    )
}

export default SignUpForm