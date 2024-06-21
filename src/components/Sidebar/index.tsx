'use client'

import {useState} from 'react'
import {twMerge} from 'tailwind-merge'
import {Search, Menu} from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible'

import * as Input from '@/components/Basics/Input'
import {Conditional} from '@/components/Basics/Conditional'
import {Button} from '@/components/Basics/Button'
import {Logo} from '@/components/Sidebar/Logo'
import {NavItem} from '@/components/Sidebar/NavItem'
import {UsedSpaceWidget} from '@/components/Sidebar/UsedSpaceWidget'
import {Profile} from '@/components/Sidebar/Profile'
import {
  TNavItemProps,
  defineIcon,
  mockNavigationItems,
} from '@/components/Sidebar/data'

export function Sidebar() {
  const [navigationItems] = useState<TNavItemProps[]>(mockNavigationItems)

  return (
    <Collapsible.Root
      className={twMerge(
        'data-[state=open]:bottom-0',
        'lg:data-[state=closed]:bottom-0',
        'fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4',
        'lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8',
        'dark:border-zinc-800 dark:bg-zinc-900',
      )}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className={twMerge(
          'data-[state=closed]:hidden',
          'lg:data-[state=closed]:flex',
          'flex flex-1 flex-col gap-6',
        )}
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>
        <nav className="space-y-0.5">
          {navigationItems?.map((item) => (
            <div key={item.title}>
              <Conditional render={!item.settingsSession}>
                <NavItem
                  icon={defineIcon(item.title.toLowerCase())}
                  {...item}
                />
              </Conditional>
            </div>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            {navigationItems?.map((item) => (
              <div key={item.title}>
                <Conditional render={!!item.settingsSession}>
                  <NavItem
                    icon={defineIcon(item.title.toLowerCase())}
                    {...item}
                  />
                </Conditional>
              </div>
            ))}
          </nav>
          <UsedSpaceWidget />
          <div className={twMerge('h-px bg-zinc-200', 'dark:bg-zinc-700')} />
          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
