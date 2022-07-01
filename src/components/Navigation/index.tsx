import React, {useEffect, useCallback, useState, useRef, memo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Button from '@mui/material/Button'
// import Drawer from '@mui/material/Drawer'

import {RootState} from 'store'

// import axios from 'axios'
// import config from 'config'
import {fetchInitial} from './LatestSlice'
import ItemCard from '../ItemCard'
// import useIntersect from '../../hooks/useIntersect'
import Loading from '../Loading'

// interface IProps {
//   data: any
//   // onClick(event: React.MouseEvent<HTMLButtonElement>): void
//   // ...
// }

const Navigation: React.FC = memo(() => {
  // const [pushedSeatsDom, setPushedSeatsDom] = useState(false)
  // const [page, setPage] = useState(1)
  const {latest, loading} = useSelector((state: RootState) => state.latest)
  const {translation} = useSelector((state: RootState) => state.main)
  const page = useRef(1)

  const dispatch = useDispatch()

  // const handleLoadMore = useCallback(() => {
  //   // setTimeout(() => {
  //     page.current += 1
  //     // @ts-ignore
  //     dispatch(fetchInitial(page.current))
  //   // }, 500)
  // }, [dispatch])
  //
  // useEffect(() => {
  //   if (latest.length === 0) {
  //     // @ts-ignore
  //     dispatch(fetchInitial(page.current))
  //   }
  //   return () => {}
  // }, [dispatch, latest, page])

  return (
    <>
      <div className="bg-white col-span-4">
       <header>Peng Yan</header>
        <ul>
          <li><a href="">Works</a></li>
          <li><a href="">About</a></li>
        </ul>

      </div>
    </>
  )
})

export default Navigation
Navigation.displayName = 'Navigation'
