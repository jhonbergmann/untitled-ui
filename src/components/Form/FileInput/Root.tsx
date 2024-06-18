'use client'

import {ComponentProps, createContext, useContext, useId, useState} from 'react'

type TFileInputContext = {
  id: string
  files: File[]
  onFilesSelected: (files: File[]) => void
}

const FileInputContext = createContext({} as TFileInputContext)

interface TRootProps extends ComponentProps<'div'> {}

export function Root(props: TRootProps) {
  const [files, setFiles] = useState<File[]>([])

  const id = useId()

  return (
    <FileInputContext.Provider value={{id, files, onFilesSelected: setFiles}}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => {
  return useContext(FileInputContext)
}
