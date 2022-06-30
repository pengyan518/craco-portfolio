import React, {useEffect, useCallback, useState, useRef, memo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import {TransitionProps} from '@mui/material/transitions'

import {RootState} from 'store'

import axios from 'axios'
import config from 'config'
import SearchIcon from '../SvgIcons/SearchIcon'
import {Input} from './styles'
import { setDialogStatus } from "../../features/main/MainSlice";
import LoginForm from "./LoginForm";

interface IProps {
  data: any
  // onClick(event: React.MouseEvent<HTMLButtonElement>): void
  // ...
}



const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const Login: React.FC = memo(() => {
  // const [pushedSeatsDom, setPushedSeatsDom] = useState(false)
  // const [authType, setAuthType] = useState("login")
  const {latest, loading} = useSelector((state: RootState) => state.latest)
  const {translation, loginDialogStatus} = useSelector((state: RootState) => state.main)

  const dispatch = useDispatch()

  // const onChange = useCallback(({target}) => {
  //   setData(target.value)
  // }, [])

  const handleClose = () => {
    dispatch(setDialogStatus(false))
  }

  // const handleSubmit = useCallback(
  //   e => {
  //     e.preventDefault()
  //     window.location.href = `/user/do/login?next=${window.location.origin}`
  //   },
  //   []
  // )

  return (
    <Dialog
      open={loginDialogStatus}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description">
      <DialogTitle>{"Please login first:"}</DialogTitle>
      <DialogContent>
        <div className="w-full text-center">
        <LoginForm />
        </div>
      </DialogContent>
      {/* <DialogActions> */}
      {/*  <Button onClick={handleClose}>x</Button> */}
      {/* </DialogActions> */}
    </Dialog>
  )
})

export default Login
Login.displayName = 'Login'
