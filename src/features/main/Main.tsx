import React, {useEffect, useCallback, useState, useLayoutEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Drawer from '@mui/material/Drawer'
import {RootState} from 'store'

import {fetchTranslation, getDrawerStatus, fetchInitial, setDialogStatus} from './MainSlice'

import Latest from '../../components/Latest'
import Category from '../../components/Category'
import Article from '../../components/Article'
import {Tab, Paper, Wrapper} from './styles'
import Search from '../../components/Search'
import Header from '../../components/Header'
import Loading from '../../components/Loading'
import config from "../../config";
import Login from "../../components/Login"

// import ControlPanel from '../controlPanel/ControlPanel'
// import SeatingChart from '../../components/SeatingChart'

const Main: React.FC = () => {

  const [latestTab, setLatestTab] = useState(true)
  const {isDrawerOpened, translation, loading, loginInfo, loadingInitial, loginDialogStatus} = useSelector((state: RootState) => state.main)
  // const error = useSelector((state: RootState) => state.main.error)

  const dispatch = useDispatch()
  const switchTab = useCallback(
    isLatest => () => {
      setLatestTab(isLatest)
    },
    []
  )
  const handleClose = useCallback(() => dispatch(getDrawerStatus(false)), [dispatch])

  useEffect(() => {
    if (!loginInfo) {
      // @ts-ignore
      dispatch(fetchInitial())
    }
    return () => {}
  }, [dispatch, loginInfo])

  useEffect(() => {
    // if (loginInfo && loginInfo.authStatus !== 1 && config.authrizedIps.indexOf(loginInfo.user.ip) < 0 ) {
      // window.location.href = `/user/do/login?next=${window.location.origin}`
      dispatch(setDialogStatus(true))
    // }
    return () => {
      // window.location.href = `/`
    }
  }, [dispatch, loadingInitial, loginInfo])

  useEffect(() => {
    if (!translation) {
      // @ts-ignore
      dispatch(fetchTranslation())
    }
    return () => {}
  }, [dispatch, translation])

  // if (loginInfo && loginInfo.authStatus !== 1 && config.authrizedIps.indexOf(loginInfo.user.ip) < 0) {
  //   return (
  //     <>
  //       <Loading height="100vh" width="100%" color="#1976d2" />
  //     </>
  //   )
  // }

  // @ts-ignore
  return (
    <>
      {loading ? (
        <Loading height="100vh" width="100%" color="#1976d2" />
      ) : (
        <>
          {/* <Loading height="100vh" width="100%" color="#1976d2" /> */}
          {translation && loginInfo &&  (
            <Wrapper isDrawerOpened={isDrawerOpened} className="flex items-center flex-col">
              <Header />
              <Search />
              <div className="grid grid-cols-2 relative z-10">
                <Tab className="text-center hand text-sky-700 px-8 py-4 font-medium" activated={latestTab} onClick={switchTab(true)}>
                  {translation['Latest Videos']}
                </Tab>
                <Tab className="text-center hand text-sky-700 px-8 py-4 font-medium" activated={!latestTab} onClick={switchTab(false)}>
                  {translation['By Category']}
                </Tab>
              </div>
              <Paper className="bg-white w-full">{latestTab ? <Latest /> : <Category />}</Paper>
            </Wrapper>
          )}
          <Drawer
            anchor="right"
            open={isDrawerOpened}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="w-9/12">
            <Article />
          </Drawer>
          {/* @ts-ignore */}
           <Login />
        </>
      )}
    </>
  )
}

export default Main
