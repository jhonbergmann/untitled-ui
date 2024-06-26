'use client'

import {ComponentProps, createContext, useContext, useId, useState} from 'react'

import {TFileInputContext} from '@/components/Form/FileInput/data'

const FileInputContext = createContext({} as TFileInputContext)

interface TRootProps extends ComponentProps<'div'> {}

export function Root(props: TRootProps) {
  const [files, setFiles] = useState<File[]>([])

  const id = useId()

  const onFilesSelected = (files: File[], multiple: boolean) => {
    if (multiple) {
      setFiles((state) => [...state, ...files])
      return
    }
    setFiles(files)
  }

  return (
    <FileInputContext.Provider value={{id, files, onFilesSelected}}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => {
  return useContext(FileInputContext)
}
