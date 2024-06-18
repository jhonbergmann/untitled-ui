import {ComponentProps} from 'react'

interface TTextareaProps extends ComponentProps<'textarea'> {}

export function Textarea(props: TTextareaProps) {
  return (
    <textarea
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none"
      {...props}
    />
  )
}
