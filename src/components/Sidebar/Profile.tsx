import Image from 'next/image'
import {LogOut} from 'lucide-react'
import {twMerge} from 'tailwind-merge'

import {Button} from '@/components/Basics/Button'
import {TProfileProps} from '@/components/Sidebar/data'

export function Profile({
  name = 'Jhonatan Bergmann',
  email = 'jhonatan@example.com',
  avatar = 'https://github.com/vercel.png',
  onLogout = () => {},
}: TProfileProps) {
  return (
    <div className="flex items-center gap-3">
      <Image
        alt=""
        src={avatar}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span
          className={twMerge(
            'text-sm font-semibold text-zinc-700',
            'dark:text-zinc-100',
          )}
        >
          {name}
        </span>
        <span
          className={twMerge(
            'truncate text-xs text-zinc-500',
            'dark:text-zinc-400',
          )}
        >
          {email}
        </span>
      </div>
      <div className="ml-auto">
        <Button onClick={onLogout} type="button" variant="ghost">
          <LogOut className="h-5 w-5 text-zinc-500" />
        </Button>
      </div>
    </div>
  )
}
