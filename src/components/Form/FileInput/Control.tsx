'use client'

import {ComponentProps} from 'react'

import {useFileInput} from './Root'

interface TControlProps extends ComponentProps<'input'> {}

export function Control(props: TControlProps) {
  const {id, onFilesSelected} = useFileInput()

  const handleFilesSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return
    onFilesSelected(Array.from(files))
  }

  return (
    <input
      className="sr-only"
      onChange={handleFilesSelected}
      type="file"
      id={id}
      {...props}
    />
  )
}
