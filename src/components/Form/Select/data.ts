import * as SelectPrimitive from '@radix-ui/react-select'

export interface TSelectProps extends SelectPrimitive.SelectProps {
  children: React.ReactNode
  placeholder: string
}

export interface TSelectItemProps extends SelectPrimitive.SelectItemProps {
  text: string
}
