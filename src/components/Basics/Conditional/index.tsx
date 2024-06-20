import {Children} from 'react'

import {TConditional} from './data'

export const Conditional = ({children, render}: TConditional): JSX.Element => {
  const [first, second] = Children.toArray(children)

  return <>{render ? first : second || <></>}</>
}
