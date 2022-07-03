import styled, {css} from 'styled-components'
import Breakpoint from 'utils/Breakpoint'

const {mobile, desk, xs, sm, md, lg, xl, xxl} = Breakpoint


interface Props {
  readonly ratio: number
}



export const LoadingBox = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
`
export const WidthBox = styled.div<Props>`
  width: ${({ratio}) => `${ratio * 100}%`};
`
