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

const About: React.FC = memo(() => {
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
      <div className="col-span-7 min-h-screen">
        <div className="grid grid-cols-2 gap-x-4 md:gap-x-4 xl:gap-x-6 2xl:gap-x-10 gap-y-8 auto-rows-auto">
          {/* {latest && */}
          {/*  latest.map(item => { */}
          {/*    const {id} = item */}
          {/*    return <ItemCard key={id} item={item} showCategoryTag /> */}
          {/*  })} */}
          <div className="col-span-2">
            {/* <img src="//live.staticflickr.com/65535/52183654588_280cfa8886_h.jpg" alt="" /> */}
            <img src="//live.staticflickr.com/65535/50370000163_db0eb14e69_h.jpg" alt="" />
          </div>
          <div className="">Contact</div>
          <div className="">about</div>
        </div>
      </div>
    </>
  )
})

export default About
About.displayName = 'About'
