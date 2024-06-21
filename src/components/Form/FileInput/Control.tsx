'use client'

import {useFileInput} from '@/components/Form/FileInput/Root'
import {TControlProps} from '@/components/Basics/Input/data'

export function Control({multiple = false, ...props}: TControlProps) {
  const {id, onFilesSelected} = useFileInput()

  const handleFilesSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return
    onFilesSelected(Array.from(files), multiple)
  }

  return (
    <input
      className="sr-only"
      onChange={handleFilesSelected}
      multiple={multiple}
      type="file"
      id={id}
      {...props}
    />
  )
}
