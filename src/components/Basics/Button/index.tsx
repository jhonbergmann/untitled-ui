import {TButtonProps, button} from '@/components/Basics/Button/data'

export function Button({children, variant, className, ...props}: TButtonProps) {
  return (
    <button className={button({variant, className})} {...props}>
      {children}
    </button>
  )
}
