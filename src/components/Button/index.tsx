import {ComponentProps} from 'react'
import {tv, VariantProps} from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2',
    'active:opacity-80',
  ],
  variants: {
    variant: {
      primary: ['bg-violet-600 text-white hover:bg-violet-700'],
      outline: ['border border-zinc-300 text-zinc-700 hover:bg-zinc-50'],
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export interface TButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof button> {
  children: React.ReactNode
}

export function Button({children, variant, ...props}: TButtonProps) {
  return (
    <button className={button({variant})} {...props}>
      {children}
    </button>
  )
}
