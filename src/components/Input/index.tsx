import {ComponentProps} from 'react'

interface TPrefixProps extends ComponentProps<'div'> {}

export function Prefix(props: TPrefixProps) {
  return <div {...props} />
}

interface TControlProps extends ComponentProps<'input'> {}

export function Control(props: TControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
      {...props}
    />
  )
}

interface TRootProps extends ComponentProps<'div'> {}

export function Root(props: TRootProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2"
      {...props}
    />
  )
}
