import {twMerge} from 'tailwind-merge'
import {ChevronDown, ChevronRight, ArrowRight} from 'lucide-react'

import {Conditional} from '@/components/Basics/Conditional'
import {TNavItemProps} from '@/components/Sidebar/data'

export function NavItem({
  isSelected = false,
  title = 'Item',
  icon: Icon = ArrowRight,
  showChevron = true,
}: TNavItemProps) {
  return (
    <a
      href=""
      className={twMerge(
        'group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50',
        'dark:hover:bg-zinc-800',
        `${isSelected && 'bg-violet-50 dark:bg-zinc-800'}`,
      )}
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span
        className={twMerge(
          'font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300',
          `${isSelected && 'text-violet-500 dark:text-violet-300'}`,
        )}
      >
        {title}
      </span>
      <Conditional render={showChevron}>
        <Conditional render={isSelected}>
          <ChevronRight
            className={twMerge(
              'ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300 dark:text-zinc-600',
              `${isSelected && 'text-violet-300 dark:text-violet-300'}`,
            )}
          />
          <ChevronDown
            className={twMerge(
              'ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300 dark:text-zinc-600',
              `${isSelected && 'text-violet-300 dark:text-violet-300'}`,
            )}
          />
        </Conditional>
      </Conditional>
    </a>
  )
}
