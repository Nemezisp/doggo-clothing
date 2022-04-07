import { useState } from 'react'

import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

import FormInput from '../form-input/form-input.component';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'

import {SignInButtonsContainer, SignInContainer} from './sign-in-form.styles.jsx'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password }= formFields


    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields()
        } catch (err) {
            if (err.code === "auth/wrong-password" || err.code === "auth/user-not-found") {
                alert('Wrong email or password!')
            } else {
                console.log('Error logging in', err)
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span className='classic-font'>Sign in with your email and password below:</span>
            <form className='classic-font' onSubmit={handleSubmit}>
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
                <SignInButtonsContainer>
                    <Button type="submit">Sign In</Button>   
                    <Button type="button" buttonType = {BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>        
                </SignInButtonsContainer>
            </form> 
        </SignInContainer>
    )
}

export default SignInForm