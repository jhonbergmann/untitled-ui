'use client'

import {useAutoAnimate} from '@formkit/auto-animate/react'

import {useFileInput} from './Root'
import {FileItem} from '@/components/Form/FileInput/FileItem'

export function FileList() {
  const {files} = useFileInput()
  const [parent] = useAutoAnimate({})

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file: File) => {
        return (
          <FileItem
            key={file?.name}
            state="completed"
            {...{...file, name: file?.name, size: file?.size}}
          />
        )
      })}
    </div>
  )
}
