import React, {useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import qs from 'qs'
import {get, isEmpty, set} from 'lodash-es'
import TextField from '@mui/material/TextField'
import {RootState} from 'store'
import config from '../../config'
import objectToParams from '../../utils/objectToParameter'
import {setDialogStatus, setLoginInfo} from '../../features/main/MainSlice'

// import Box from '@mui/material/Box'
// import PropTypes from 'prop-types'

async function validate(refs, form) {
  // eslint-disable-next-line no-restricted-syntax
  for (const [attribute, ref] of Object.entries(refs.current)) {
    let errors
    // @ts-ignore
    if (ref.validate) {
      // @ts-ignore
      // eslint-disable-next-line no-await-in-loop
      errors = await ref.validate(get(form, attribute))
    }
    if (!isEmpty(errors)) {
      console.log(errors)
      return false
    }
  }
  return true
}

export default function LoginForm() {
  const [systemMessage, setSystemMessage] = useState('')
  const {translation, loginDialogStatus} = useSelector((state: RootState) => state.main)
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm()

  const onSubmit = async data => {
    // alert(JSON.stringify(data))
    // const url = `${config.loginApi}?${objectToParams(data)}`
    try {
      const response = await axios.post(config.loginApi, qs.stringify(data))
      if (response.data.status === 1) {
        dispatch(setDialogStatus(false))
        dispatch(setLoginInfo(response.data))
        setSystemMessage(response.data.messageCoreString)
        console.debug(response.data.status)
      } else {
        setSystemMessage(response.data.messageCoreString)
        console.debug(`else: ${response.data.status}`)
      }
    } catch (e) {
      console.debug(e)
    }
  } // your form submit function which will invoke after successful validation

  // @ts-ignore
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <TextField
          label="Email"
          variant="filled"
          {...register('email', {
            required: true,
            // maxLength: 20,
            // pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.email?.type === 'required' && <p>This field is required</p>}
        {/* {errors?.email?.type === 'maxLength' && <p>First name cannot exceed 20 characters</p>} */}
        {errors?.email?.type === 'pattern' && <p>Alphabetical characters only</p>}
      </div>
      <div className="mb-6">
        <TextField
          variant="filled"
          label="Password"
          type="password"
          {...register('password', {
            required: true,
            // pattern: /^[A-Za-z]+$/i}
          })}
        />
        {errors?.password?.type === 'required' && <p>This field is required</p>}
        {/* {errors?.password?.type === 'pattern' && <p>Alphabetical characters only</p>} */}
      </div>
      <div>
        <img src={config.validationImg + translation.rnd36Bit} alt="" />
      </div>

      <div className="mb-6">
        <TextField
          variant="filled"
          label="Image Verification Code Above"
          {...register('verificationCode', {
            required: true,
            // pattern: /^[A-Za-z]+$/i}
          })}
        />
        {errors?.verificationCode?.type === 'required' && <p>This field is required</p>}
        {/* { errors?.verificationCode?.type === 'pattern' && <p>Alphabetical characters only</p>} */}
      </div>
      <div>{systemMessage}</div>

      <input
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        value="Sign in our secure sever"
      />
    </form>
  )
}
//
// LoginForm.propTypes = {
//   setAuthType: PropTypes.func,
// }
