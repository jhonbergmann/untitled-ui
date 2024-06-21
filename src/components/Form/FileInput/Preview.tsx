'use client'

import {useMemo} from 'react'
import Image from 'next/image'
import {User} from 'lucide-react'
import {twMerge} from 'tailwind-merge'

import {useFileInput} from './Root'

export function Preview() {
  const {files} = useFileInput()

  const previewURL = useMemo(() => {
    if (!files || files.length === 0) {
      return null
    }
    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div
        className={twMerge(
          'flex h-16 w-16 items-center justify-center rounded-full bg-violet-50',
          'dark:bg-violet-500/10',
        )}
      >
        <User
          className={twMerge('h-8 w-8 text-violet-500', 'dark:text-violet-300')}
        />
      </div>
    )
  }

  return (
    <Image
      alt=""
      className="h-16 w-16 rounded-full object-cover"
      src={previewURL}
      layout="fixed"
      width={32}
      height={32}
    />
  )
}
