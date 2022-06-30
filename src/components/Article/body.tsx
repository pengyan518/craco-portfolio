import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {RootState} from 'store'
import Video from './Video'
import ItemCard from '../ItemCard'
import Close from "../SvgIcons/Close";
import { getDrawerStatus } from "../../features/main/MainSlice";
import Slash from "../SvgIcons/Slash";
import Loading from "../Loading";

// import axios from 'axios'
// import config from 'config'
// import {cleanArticle, fetchArticle} from './ArticleSlice'

// interface IProps {
//   item: any
//   // onClick(event: React.MouseEvent<HTMLButtonElement>): void
//   // ...
// }

const Body: React.FC = () => {
  // const [pushedSeatsDom, setPushedSeatsDom] = useState(false)
  // const {originalLink, linkHighlighted, nameDisplay, length, id} = item
  const {translation} = useSelector((state: RootState) => state.main)
  const {articleData, loading} = useSelector((state: RootState) => state.article)
  const {breadcrumb, item, itemsRelated, title, mediaLink} = articleData
  const dispatch = useDispatch()

  const handelClose = ()=>dispatch(getDrawerStatus(false))

  return (
    <>
      {articleData && (
        <div>
          <header className="flex px-12 py-3 text-slate-500">
            {breadcrumb.map((menu, i) => {
              const [name, link] = menu
              return (
                <div key={i} className="flex">
                  <a className="text-sm text-slate-500" href={link}>{name}</a>
                  {/*  @ts-ignore */}
                  {i < breadcrumb.length - 1 && <><Slash className="h-3 w-3 text-slate-400 mt-1 mx-2 -rotate-[20deg]" viewBox="0 0 16 16" /></>}
                </div>
              )
            })}

            <div className="absolute right-2 top-0 cursor-pointer" onClick={handelClose}>
              {/*  @ts-ignore */}
              <Close className="h-9 w-9 text-slate-700 ml-2 mt-1" viewBox="0 0 16 16" />
            </div>
          </header>
          <Video />
          <div className="px-4 md:px-6 xl:px-12 pb-40 pt-10">
            <div className="font-semibold text-2xl">{title}</div>
            <div className="pb-12 pt-6" dangerouslySetInnerHTML={{__html: item.body}} />
            <div className="font-semibold pb-4">{translation["Related Videos"]}</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 2xl:grid-cols-6 auto-rows-auto">
              {itemsRelated.map(related => (
                <ItemCard key={related.id} item={related} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Body
