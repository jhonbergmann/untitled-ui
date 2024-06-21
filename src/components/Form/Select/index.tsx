'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import {ChevronDown} from 'lucide-react'
import {twMerge} from 'tailwind-merge'

import {TSelectProps} from '@/components/Form/Select/data'

export function Select({children, placeholder, ...props}: TSelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger
        className={twMerge(
          'data-[placeholder]:text-zinc-600',
          'dark:data-[placeholder]:text-zinc-400',
          'focus:border-violet-300 focus:ring-4 focus:ring-violet-100',
          'flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none',
          'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20',
        )}
      >
        <SelectPrimitive.Value
          className="text-black"
          placeholder={placeholder}
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className={twMerge(
            'animate-slideDownAndFade',
            'z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-300 bg-white shadow-md',
            'dark:border-zinc-700 dark:bg-zinc-800',
          )}
          side="bottom"
          sideOffset={8}
          position="popper"
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
