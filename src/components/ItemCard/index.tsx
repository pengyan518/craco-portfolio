import React, {useEffect, useCallback, useState, memo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import {RootState} from 'store'

import axios from 'axios'
import config from 'config'
import {getDrawerStatus} from '../../features/main/MainSlice'
import {fetchArticle} from '../Article/ArticleSlice'
// import Image from '../Image'

interface IProps {
  item: any
  index?: any
  showCategoryTag?: boolean
  // onClick(event: React.MouseEvent<HTMLButtonElement>): void
  // ...
}

const ItemCard: React.FC<IProps> = memo(({item, showCategoryTag}) => {
  // const [pushedSeatsDom, setPushedSeatsDom] = useState(false)
  const {isDrawerOpened, translation} = useSelector((state: RootState) => state.main)
  const {originalLink, nameDisplay, length, id, categoryDisplay} = item
  const {name, termId} = categoryDisplay
  const categoryName = name.split('|')[translation.langCode === 'en-us' ? 0 : 1]
  const categoryIndex = config.categoryTerm.findIndex(value=>value[0].includes(termId))

  const dispatch = useDispatch()

  const openArticle = useCallback(() => {
    if (!isDrawerOpened) dispatch(getDrawerStatus(true))
    // dispatch(setArticleId(id))
    // @ts-ignore
    dispatch(fetchArticle(id))
  }, [dispatch, id, isDrawerOpened])

  return (
    <div className="w-full relative cursor-pointer">
      <div className="w-full aspect-[18/10] relative cursor-pointer" onClick={openArticle} >
        {/*  @ts-ignore */}
        <LazyLoadImage className="absolute object-cover inset-0 w-full h-full" src={originalLink} alt={nameDisplay} effect="blur" />
        {length && <div className="absolute bottom-0 right-0 bg-slate-600 text-white px-3 py-1 text-sm font-medium">{length}</div>}
      </div>
      <div className="line-clamp-3 mt-2 leading-5 hover:text-sky-700" onClick={openArticle}>{nameDisplay}</div>
      {/*  @ts-ignore */}
      {showCategoryTag && <a className="text-xs uppercase font-semibold text-sky-600 pt-2 hover:text-sky-900" href={config.categoryTerm[categoryIndex][2]}>{categoryName.trim()}</a>}
    </div>
  )
})

export default ItemCard
ItemCard.displayName = 'ItemCard'
