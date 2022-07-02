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
  const [openMenu, setOpenMenu] = useState(false)
  const {active} = useSelector((state: RootState) => state.navigation)
  const {translation} = useSelector((state: RootState) => state.main)
  const page = useRef(1)

  const dispatch = useDispatch()
  const handleClick = useCallback(area => () => dispatch(setFocusArea(area)), [dispatch])
  const handleOpenMenu = useCallback(() => setOpenMenu(!openMenu), [openMenu])

  return (
    <>
      <div className="col-span-4 md:px-6">
        <div className="flex justify-between items-center pb-4">
          <header
            className={`text-lg cursor-pointer font-bold ${active === 'works' ? 'active' : 'opacity-70'}`}
            onClick={handleClick('me')}>
            PENG YAN
          </header>

          <div className="flex md:hidden">
            <button
              onClick={handleOpenMenu}
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-4"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"></path>
              </svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>

        <ul className="hidden md:block">
          <li className={active === 'works' ? 'active' : 'opacity-70'}>
            <a className="cursor-pointer pt-4 pb-2 block" onClick={handleClick('works')}>
              Works
            </a>
          </li>
          <li className={active === 'about' ? 'active' : 'opacity-70'}>
            <a className="cursor-pointer py-2 block" onClick={handleClick('about')}>
              About
            </a>
          </li>
        </ul>
        {openMenu && (
          <div className="md:hidden justify-between items-center w-full flex md:w-auto md:order-1 pb-4" id="mobile-menu-4">
            <ul className="w-full flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  onClick={handleClick('me')}
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick('works')}
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Works
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick('about')}
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  About
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
})

export default Navigation
Navigation.displayName = 'Navigation'
