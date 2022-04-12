import { useState, FormEvent, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import { AuthError, AuthErrorCodes } from 'firebase/auth';

import FormInput from '../form-input/form-input.component';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'

import {SignInButtonsContainer, SignInContainer} from './sign-in-form.styles'

import { googleSignInStart, emailSignInStart } from '../../store/user/user.actions';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const dispatch = useDispatch()

    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password }= formFields

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            dispatch(emailSignInStart(email, password))
            resetFormFields()
        } catch (err) {
            if ((err as AuthError).code === AuthErrorCodes.INVALID_PASSWORD || (err as AuthError).code === AuthErrorCodes.INVALID_EMAIL) {
                alert('Wrong email or password!')
            } else {
                console.log('Error logging in', err)
            }
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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