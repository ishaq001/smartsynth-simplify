import React from 'react'
import { Card, Form, Input, Button } from 'antd'
import { authenticateUser } from './loginSlice'
import { useAppDispatch } from '../../hooks'
import { isAuthenticated } from '../../services/authenticationService'
import { useHistory } from 'react-router-dom'
import './Login.css'

export function LoginPage() {
  const dispatch = useAppDispatch()
  let history = useHistory()
  if (isAuthenticated()) {
    history.push('/dashboard')
  }

  const onFinish = (values: any) => {
    dispatch(authenticateUser(values))
  }

  return (
    <div className='loginWrap'>
      <div className='loginContent'>
        <a href='#' className='signInLogo'>
          <img src='../../../images/logo-1.svg' alt='' />
        </a>
        11
        <div className='mainForm'>
          <form>
            <div className='heading'>
              <h1>Sign In to Metronic</h1>
              <span>
                New Here? <a href='#'>Create an Account</a>
              </span>
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Email</label>
              <input
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder=''
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>
                Password <a href='#'>Forgot Password ?</a>
              </label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                placeholder=''
              />
            </div>
            <div className='form-check'>
              <button type='submit'>Continue</button>
              <div className='text-center'>or</div>
              <div className='social-media'>
                <div className='social-items'>
                  <img src='../../../images/google-icon.svg' alt='google' />
                  <a href='#'> Continue with Google</a>
                </div>
                <div className='social-items'>
                  <img src='../../../images/facebook-4.svg' alt='' />
                  <a href='#'> Continue with Facebook</a>
                </div>
                <div className='social-items'>
                  <img src='../../../images/apple-black.svg' alt='' />
                  <a href='#'> Continue with Apple</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <footer>
        <div className='links'>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
          <a href='#'>Contact Us</a>
        </div>
      </footer>
    </div>
  )
}
