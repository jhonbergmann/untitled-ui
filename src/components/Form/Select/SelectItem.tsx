'use client'

import * as Select from '@radix-ui/react-select'
import {twMerge} from 'tailwind-merge'
import {Check} from 'lucide-react'

import {TSelectItemProps} from '@/components/Form/Select/data'

export function SelectItem({text, ...props}: TSelectItemProps) {
  return (
    <Select.Item
      className={twMerge(
        'data-[highlighted]:bg-zinc-50',
        'flex items-center justify-between gap-2 px-3 py-2.5 outline-none',
        'dark:data-[highlighted]:bg-zinc-700',
      )}
      {...props}
    >
      <Select.ItemText asChild>
        <span className={twMerge('text-black', 'dark:text-zinc-100')}>
          {text}
        </span>
      </Select.ItemText>
      <Select.ItemIndicator>
        <Check
          className={twMerge('h-4 w-4 text-violet-500', 'dark:text-violet-300')}
        />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
