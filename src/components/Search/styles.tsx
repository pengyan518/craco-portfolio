import styled from 'styled-components'
import Breakpoint from 'utils/Breakpoint'
import {Interface} from 'readline'

const {mobile, desk, xs, sm, md, lg, xl, xxl} = Breakpoint

// interface Props {
//   count?: number
// }

export const Input = styled.input`
  @media (min-width: ${desk}px) {
    //grid-column-start: 1;
    //grid-column-end: 14;
    grid-column: 1/15;
  }
`

export const ControlSection = styled.div`
  width: 100%;
`

//
// export const LoadingBox = styled.div`
//   padding-top: 25px;
//   padding-bottom: 25px;
// `
//
// export const WidthBox = styled(Box)`
//   width: ${({ratio}) => `${ratio * 100}%`};
// `
