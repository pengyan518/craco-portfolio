import React, {useEffect, useCallback, useState, useRef, memo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Button from '@mui/material/Button'
// import Drawer from '@mui/material/Drawer'

import {RootState} from 'store'

// import axios from 'axios'
// import config from 'config'
import {fetchInitial, setFocusArea} from './NavigationSlice'
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
  const {active} = useSelector((state: RootState) => state.navigation)
  const {translation} = useSelector((state: RootState) => state.main)
  const page = useRef(1)

  const dispatch = useDispatch()
  const handleClick = useCallback(area => () => dispatch(setFocusArea(area)), [dispatch])

  return (
    <>
      <div className="col-span-4">
        <header className={`cursor-pointer font-bold ${active==='works'?'active':'opacity-70'}`} onClick={handleClick('me')}>__Shen Yun__</header>
        <ul>
          <li className={active==='works'?'active':'opacity-70'}>
            <a className="cursor-pointer" onClick={handleClick('works')}>
              Works
            </a>
          </li>
          <li className={active==='about'?'active':'opacity-70'}>
            <a className="cursor-pointer" onClick={handleClick('about')}>
              About
            </a>
          </li>
        </ul>
      </div>
    </>
  )
})

export default Navigation
Navigation.displayName = 'Navigation'
