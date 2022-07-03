import React, {useEffect, useCallback, useState, useRef, memo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
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

  return (
    <>
      <div className="col-span-7 min-h-screen">
        <div className="grid grid-cols-2 gap-x-4 md:gap-x-4 xl:gap-x-6 2xl:gap-x-10 gap-y-8 auto-rows-auto">
          <div className="col-span-2 relative aspect-[18/14]">
            <LazyLoadImage
              className="rounded absolute object-cover inset-0 w-full h-full"
              src={'//live.staticflickr.com/65535/50370000163_db0eb14e69_h.jpg'}
              effect="blur"
            />
            {/* <img src="//live.staticflickr.com/65535/52183654588_280cfa8886_h.jpg" alt="" /> */}
          </div>
          <div className="col-span-2 relative grid md:grid-cols-12 md:gap-x-6 xl:gap-x-6 2xl:gap-x-10 gap-y-8 auto-rows-auto mt-10">
            <div className="md:col-span-4">
              <header className="pb-8">Contact</header>
              <p className="text-sm mb-10">
                T. 845 421 2078
                <br />
                <a className="underline" href="mailto:pengtrym@gmail.com">
                  pengtrym@gmail.com
                </a>
              </p>
              <p className="text-sm">
                208 Route 209
                <br />
                Port Jervis, New York, 12771
              </p>
            </div>
            <div className="md:col-span-7">
              <p className="pb-10 leading-relaxed">
                Before my coding live, I was an artist, I like design and details, I wanna make a perfect website with beautiful UI and smooth UX, this is the reason why I became a programmer.
              </p>
              <p className="pb-10 leading-relaxed">
                Seasoned and independent Front End Developer with 10 years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging.
              </p>
              <p className="pb-10 leading-relaxed"><a target="_blank" href="https://Shenyun.com" rel="noreferrer">Shenyun.com</a> is my proudest project. The designer only provide me a very rough design. But with my love, I extend the details and most of the UX design, added animations to improve the details. </p>

            </div>
          </div>
        </div>
      </div>
    </>
  )
})

export default About
About.displayName = 'About'
