'use client'

import {useMemo} from 'react'
import Image from 'next/image'
import {User} from 'lucide-react'

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
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
        <User className="h-8 w-8 text-violet-500" />
      </div>
    )
  }

  return (
    <Image
      className="h-16 w-16 rounded-full object-cover"
      src={previewURL}
      alt=""
      layout="fixed"
      width={32}
      height={32}
    />
  )
}
