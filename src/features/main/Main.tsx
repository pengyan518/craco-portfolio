import React, {useEffect, useCallback, useState, useLayoutEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import {RootState} from 'store'

import {fetchTranslation, getDrawerStatus, fetchInitial, setDialogStatus} from './MainSlice'

import Latest from '../../components/Latest'
import Category from '../../components/Category'
import Article from '../../components/Article'
import {Tab, Paper, Wrapper} from './styles'
import Search from '../../components/Search'
import Header from '../../components/Header'
import Loading from '../../components/Loading'
import config from '../../config'
import Navigation from '../../components/Navigation'
import WorksGrid from '../../components/WorksGrid'
import About from '../../components/About'
import Me from '../../components/Me'

// import ControlPanel from '../controlPanel/ControlPanel'
// import SeatingChart from '../../components/SeatingChart'

const Main: React.FC = () => {
  const [latestTab, setLatestTab] = useState(true)
  const {isDrawerOpened} = useSelector((state: RootState) => state.main)
  const {active, loading} = useSelector((state: RootState) => state.navigation)
  // const error = useSelector((state: RootState) => state.main.error)

  const dispatch = useDispatch()

  const handleClose = useCallback(() => dispatch(getDrawerStatus(false)), [dispatch])

  // @ts-ignore
  return (
    <>
      {loading ? (
        <Loading height="100vh" width="100%" color="#1976d2" />
      ) : (
        <>
          <div className="grid grid-cols-1 p-4 md:grid-cols-12 md:py-20">
            <Navigation />
            {active === 'me' && <Me />}
            {active === 'works' && <WorksGrid />}
            {active === 'about' && <About />}
          </div>

          <Drawer
            anchor="right"
            open={isDrawerOpened}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="w-9/12"
          >
            <Box><Article /></Box>
          </Drawer>
        </>
      )}
    </>
  )
}

export default Main
