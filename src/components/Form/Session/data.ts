import {ComponentProps} from 'react'

export interface TSessionProps extends ComponentProps<'div'> {
  htmlFor: string
  title: string
  subtitle?: string
  children: React.ReactNode
}
