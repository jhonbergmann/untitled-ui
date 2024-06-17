'use client'

import * as Tabs from '@radix-ui/react-tabs'
import {motion} from 'framer-motion'

interface TTabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({value, title, isSelected = false}: TTabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span>{title}</span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-x-0 -bottom-px h-0.5 bg-violet-700"
        />
      )}
    </Tabs.Trigger>
  )
}
