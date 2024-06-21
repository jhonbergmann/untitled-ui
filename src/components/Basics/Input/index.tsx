import {twMerge} from 'tailwind-merge'

import {
  TPrefixProps,
  TControlProps,
  TRootProps,
} from '@/components/Basics/Input/data'

export function Prefix(props: TPrefixProps) {
  return <div {...props} />
}

export function Control(props: TControlProps) {
  return (
    <input
      className={twMerge(
        'flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none',
        'dark:text-zinc-100 dark:placeholder-zinc-400',
      )}
      {...props}
    />
  )
}

export function Root(props: TRootProps) {
  return (
    <div
      className={twMerge(
        'flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2',
        'focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100',
        'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20',
        props.className,
      )}
      {...props}
    />
  )
}
