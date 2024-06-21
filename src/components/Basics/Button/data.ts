import {ComponentProps} from 'react'
import {tv, VariantProps} from 'tailwind-variants'

export const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2',
    'active:opacity-80',
  ],
  variants: {
    variant: {
      primary: [
        'bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600',
      ],
      ghost: [
        'rounded-md px-2 hover:bg-zinc-50 shadow-none text-zinc-500 dark:hover:bg-white/5 dark:text-zinc-400',
      ],
      outline: [
        'border border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800',
      ],
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
