'use client'

import {useState} from 'react'
import {twMerge} from 'tailwind-merge'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'

import {TabItem} from '@/components/Tabs/TabItem'
import {mockTabs} from '@/components/Tabs/data'

export function Tabs() {
  const [currentTab, setCurrentTab] = useState<string>('tab1')

  return (
    <TabsPrimitive.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root type="scroll" className="w-full">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <TabsPrimitive.List
            className={twMerge(
              'mt-6 flex w-full items-center gap-4 border-b border-zinc-200',
              'dark:border-zinc-700',
            )}
          >
            {mockTabs.map((tab) => (
              <TabItem
                key={tab.value}
                value={tab.value}
                title={tab.title}
                isSelected={currentTab === tab.value}
              />
            ))}
          </TabsPrimitive.List>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="horizontal"
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </TabsPrimitive.Root>
  )
}
