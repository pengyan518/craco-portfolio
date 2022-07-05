import React, {useEffect, useCallback, useState, useRef, memo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
// import {DarkThemeToggle} from "flowbite-react";

import {RootState} from 'store'

// import axios from 'axios'
// import config from 'config'
import {Box} from './styles'
// import useIntersect from '../../hooks/useIntersect'
// import Loading from '../Loading'
// import {DarkThemeToggle} from "flowbite-react";
import ThemeToggle from "../ThemeToggle";


// interface IProps {
//   data: any
//   // onClick(event: React.MouseEvent<HTMLButtonElement>): void
//   // ...
// }

const Footer: React.FC = memo(() => {
  // const [pushedSeatsDom, setPushedSeatsDom] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const {active} = useSelector((state: RootState) => state.navigation)
  const {translation} = useSelector((state: RootState) => state.main)
  const page = useRef(1)

  const dispatch = useDispatch()

  return (
    <>
      <div className="relative block dark:text-gray-300 text-[11px] mt-8 font-light">
        © 2022. All rights reserved.
      </div>
    </>
  )
})

export default Footer
Footer.displayName = 'Footer'
