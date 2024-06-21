'use client'

import {twMerge} from 'tailwind-merge'
import * as Tabs from '@radix-ui/react-tabs'
import {motion} from 'framer-motion'

import {TTabItemProps} from '@/components/Tabs/data'

export function TabItem({value, title, isSelected = false}: TTabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className={twMerge(
        'data-[state=active]:text-violet-700',
        'dark:data-[state=active]:text-violet-300',
        'group relative px-1 pb-4 text-sm font-medium text-zinc-500 outline-none hover:text-violet-700',
        'dark:text-zinc-400 dark:hover:text-violet-300',
      )}
    >
      <span
        className={twMerge(
          'whitespace-nowrap rounded',
          'group-focus-visible:ring-offset-4, group-focus-visible:ring-2 group-focus-visible:ring-violet-400',
        )}
      >
        {title}
      </span>
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className={twMerge(
            'absolute inset-x-0 -bottom-px h-0.5 bg-violet-700',
            'dark:bg-violet-300',
          )}
        />
      )}
    </Tabs.Trigger>
  )
}
