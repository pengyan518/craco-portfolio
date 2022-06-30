import React, {useEffect, useState} from 'react'
import Spinner from '../SvgIcons/Spinner'
import {LoadingContainer, LoadingType} from './styles'

const Loading: React.FC<LoadingType> = ({background, color, width, height}) => {
  // const loadingSize = size || '64'

  return (
    <LoadingContainer width={width} height={height} color={color} background={background}>
      {/*  @ts-ignore */}
      <Spinner className="Main__Spinner w-12 h-12" viewBox="0 0 100 100" />
    </LoadingContainer>
  )
}

export default Loading
