import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {SignUpContainer} from './sign-up-form.styles';

import { signUpStart } from '../../store/user/user.actions';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword }= formFields
    const dispatch = useDispatch()

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (confirmPassword !== password) {
            alert("passwords do not match");
            return
        } 

        dispatch(signUpStart(email, password, displayName))
        resetFormFields()
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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