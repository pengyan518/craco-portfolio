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
import {mediaByIndex,theaters} from "../../assets/media";

// interface IProps {
//   data: any
//   // onClick(event: React.MouseEvent<HTMLButtonElement>): void
//   // ...
// }

const WorksGrid: React.FC = memo(() => {
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
      <div className="col-span-7">
        <div className="grid grid-cols-2 gap-x-4 md:gap-x-4 xl:gap-x-6 2xl:gap-x-10 gap-y-14 md:grid-cols-2 xl:grid-cols-3 auto-rows-auto">
           {theaters &&
            theaters.map(item => {
              const {id} = item
              return <ItemCard key={id} item={item} />
            })}
        </div>

      </div>
    </>
  )
})

export default WorksGrid
WorksGrid.displayName = 'WorksGrid'
