import React, {useEffect, useImperativeHandle, useMemo, useRef} from 'react'
import {ChevronRightIcon, ChevronLeftIcon} from '@heroicons/react/solid'
// eslint-disable-next-line import/no-cycle
import SwipeItem from './SwipeItem'
import useRect from '../../hooks/Swipe/useRect'
import useSwipe from '../../hooks/Swipe/useSwipe'
import useVisibility from '../../hooks/Swipe/useVisibility'
import useEventListener from '../../hooks/Swipe/useEventListener'
import useTouch from '../../hooks/Swipe/useTouch'
import useResize from '../../hooks/Swipe/useResize'
import {SwipeRoot} from './styles'
import { ChevronLeft, ChevronRight } from "../SvgIcons";
// import SwipeDots from './SwipeDots'

export interface SwipeRef {
  next: () => void
  prev: () => void
  slideTo: (to: number, swiping?: boolean) => void
}

export interface SwipeProps {
  onSlideChange?: (current: number) => void
  autoplay?: number
  duration?: number
  initialSwipe?: number
  loop?: boolean
  showIndicators?: boolean
  vertical?: boolean
  touchable?: boolean
  style?: React.CSSProperties
  children: React.ReactNode
  groupLength?: number
}

const Swipe = React.forwardRef<SwipeRef, SwipeProps>((props, ref) => {
  const {
    initialSwipe = 0,
    vertical = false,
    duration = 200,
    autoplay = 3000,
    touchable = true,
    loop = true,
    onSlideChange,
    // eslint-disable-next-line no-nested-ternary
    groupLength = window.innerWidth >= 1024 ? 4 : window.innerWidth < 768 ? 2 : 3,
    // groupLength = window.innerWidth < 768 ? 2 : 4,
    showIndicators = true,
  } = props
  const timer = useRef<NodeJS.Timeout | null>(null)
  const touch = useTouch()
  const count = useMemo(() => React.Children.count(props.children), [props.children])
  const {size, root, changeSize} = useRect<HTMLDivElement>([count])
  const itemSize = useMemo(() => (vertical ? size.height : size.width / groupLength), [groupLength, size.height, size.width, vertical])
  const itemKey = useMemo(() => (vertical ? 'height' : 'width'), [vertical])
  // const itemStyle = useMemo(() => ({[itemKey]: itemSize}), [itemKey, itemSize])

  // 核心方法
  const {setRefs, slideTo, next, prev, current, swipeRef, loopMove} = useSwipe({
    count,
    vertical,
    duration,
    size: itemSize,
    loop,
    groupLength,
  })
  // const distance = (0 - current) * itemSize
  const wrappStyle = useMemo(
    () => ({
      [itemKey]: itemSize * count,
    }),
    [itemKey, itemSize, count]
  )

  const onPlay = () => {
    if (count <= 1) return
    if (!autoplay) return
    timer.current = setTimeout(() => {
      loopMove()
    }, autoplay)
  }

  const onPause = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    timer.current && clearTimeout(timer.current)
    timer.current = null
  }

  const onTouchStart = (event: React.TouchEvent | TouchEvent) => {
    if (!touchable) return
    onPause()
    touch.start(event)
  }

  const onTouchMove = (event: React.TouchEvent | TouchEvent) => {
    if (!touchable) return
    touch.move(event)
    const {deltaX, deltaY} = touch.getDelta()
    slideTo({swiping: true, offset: vertical ? deltaY : deltaX})
  }

  const onTouchEnd = () => {
    if (!touchable) return
    const {deltaX, time, deltaY} = touch.end()
    const delta = vertical ? deltaY : deltaX
    // eslint-disable-next-line no-nested-ternary
    const step = itemSize / 2 < Math.abs(delta) || Math.abs(delta / time) > 0.25 ? (delta > 0 ? -groupLength : groupLength) : 0
    slideTo({swiping: false, step})
    onPlay()
  }

  useEffect(() => {
    if (itemSize) {
      slideTo({step: initialSwipe - current, swiping: true})
    }
  }, [itemSize, initialSwipe])

  useEffect(() => {
    if (itemSize) {
      onPlay()
    }
    return () => {
      onPause()
    }
  }, [count, autoplay, current, itemSize])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onSlideChange && onSlideChange(current)
  }, [current])

  const hidden = useVisibility()
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    hidden ? onPause() : onPlay()
  }, [hidden])

  useEventListener(
    'touchmove',
    event => {
      if (vertical) {
        event.preventDefault()
      }
    },
    {passive: false, target: swipeRef.current}
  )

  useResize(() => {
    onPause()
    changeSize()
    onPlay()
  })

  useImperativeHandle(ref, () => {
    return {
      next() {
        onPause()
        next()
        onPlay()
      },
      prev() {
        onPause()
        prev()
        onPlay()
      },
      slideTo(to: number, swiping?: boolean) {
        onPause()
        slideTo({step: to - current, swiping})
        onPlay()
      },
    }
  })


  return (
    <div className="relative">
      <button className="absolute w-12 left-0 z-10 h-5/6 hidden md:flex items-center" onClick={prev}>
        {/*  @ts-ignore */}
        <ChevronLeft className="h-9 w-9 text-sky-600 ml-2 mt-1" viewBox="0 0 16 16" />
      </button>
      <button className="absolute w-12 right-0 z-10 h-5/6 hidden md:flex items-center" onClick={next}>
        {/*  @ts-ignore */}
        <ChevronRight className="h-9 w-9 text-sky-600 mt-1" viewBox="0 0 16 16" />
      </button>

      <div
        ref={root}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchCancel={onTouchEnd}
        onTouchEnd={onTouchEnd}
        style={props.style}
        className="mx-auto relative overflow-hidden ml-4 mr-0 md:ml-14 md:mr-12 my-4">
        <SwipeRoot ref={swipeRef} style={wrappStyle} count={count} className="grid gap-4 md:gap-6 2xl:gap-8">
          {React.Children.map(props.children, (child, index) => {
            if (!React.isValidElement(child)) return null
            if (child.type !== SwipeItem) return null
            return React.cloneElement(child, {
              // style: itemStyle,
              vertical,
              ref: setRefs(index),
            })
          })}
        </SwipeRoot>
        {/* {showIndicators && <SwipeDots current={current} vertical={vertical} count={count} />} */}
      </div>
    </div>
  )
})

export default Swipe

Swipe.displayName = 'Swipe'
