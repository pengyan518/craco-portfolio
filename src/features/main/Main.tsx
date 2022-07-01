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
import Navigation from "../../components/Navigation";
import WorksGrid from "../../components/WorksGrid";

// import ControlPanel from '../controlPanel/ControlPanel'
// import SeatingChart from '../../components/SeatingChart'

const Main: React.FC = () => {

  const [latestTab, setLatestTab] = useState(true)
  const {isDrawerOpened, translation, loading, loginInfo, loadingInitial, loginDialogStatus} = useSelector((state: RootState) => state.main)
  // const error = useSelector((state: RootState) => state.main.error)

  const dispatch = useDispatch()



  // @ts-ignore
  return (
    <>
      {loading ? (
        <Loading height="100vh" width="100%" color="#1976d2" />
      ) : (
        <div className="grid grid-cols-12">
          <Navigation />
          <WorksGrid />
        </div>
      )}
    </>
  )
}

export default Main
