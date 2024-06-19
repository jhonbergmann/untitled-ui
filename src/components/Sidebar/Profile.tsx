import {LogOut} from 'lucide-react'
import Image from 'next/image'

import {Button} from '@/components/Button'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="https://github.com/vercel.png"
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
        alt=""
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Jhonatan Bergmann
        </span>
        <span className="truncate text-xs text-zinc-500">
          jhonatan@example.com
        </span>
      </div>
      <div className="ml-auto">
        <Button type="button" variant="ghost">
          <LogOut className="h-5 w-5 text-zinc-500" />
        </Button>
      </div>
    </div>
  )
}
