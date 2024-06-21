import {twMerge} from 'tailwind-merge'

import {TTextareaProps} from '@/components/Form/Textarea/data'

export function Textarea(props: TTextareaProps) {
  return (
    <textarea
      className={twMerge(
        'min-h-[150px]',
        'w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100',
        'dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400 dark:focus:border-violet-500 dark:focus:ring-violet-500/20',
      )}
      {...props}
    />
  )
}
