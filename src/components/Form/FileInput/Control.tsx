'use client'

import {ComponentProps} from 'react'

import {useFileInput} from './Root'

interface TControlProps extends ComponentProps<'input'> {}

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
