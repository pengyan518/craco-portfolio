import React, {useMemo} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {RootState} from 'store'
import Video from './Video'
import Close from '../SvgIcons/Close'
import {getDrawerStatus} from '../../features/main/MainSlice'
import Slash from '../SvgIcons/Slash'
import Loading from '../Loading'
import {theaters} from '../../assets/media'

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
  const {articleId, loading} = useSelector((state: RootState) => state.article)
  // const {breadcrumb, item, itemsRelated, title, mediaLink} = articleData
  const dispatch = useDispatch()

  const handelClose = () => dispatch(getDrawerStatus(false))

  const getContent = useMemo(() => {
    const index = theaters.findIndex(item => item.id === articleId)
    return theaters[index]
  }, [articleId])

  return (
    <>
      <div>
        <header className="flex px-12 py-20 text-slate-500">
          <div className="absolute right-10 top-10 cursor-pointer" onClick={handelClose}>
            {/*  @ts-ignore */}
            <Close className="h-9 w-9 text-slate-700 ml-2 mt-1" viewBox="0 0 16 16" />
          </div>
        </header>
        <div className="mx-auto w-11/12" dangerouslySetInnerHTML={{__html: getContent.videoEmbed}} />
        <div className="mx-auto w-9/12 p-20 text-center">
          <header className="font-black text-sm uppercase text-slate-400">Framework:</header>
          <div className="font-medium uppercase text-sm my-4" dangerouslySetInnerHTML={{__html: getContent.description}} />
          <div className="mx-auto w-7/12">
          <a href={getContent.url} target="_blank"
            className="my-12 font-medium rounded-lg text-sm px-16 py-4 text-center inline-flex items-center Button" rel="noreferrer">
            Go to Page
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body
