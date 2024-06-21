import {ComponentProps} from 'react'
import {twMerge} from 'tailwind-merge'
import {tv, VariantProps} from 'tailwind-variants'

export const fileItem = tv({
  slots: {
    container: [
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    ],
    icon: twMerge(
      'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600',
      'dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500',
    ),
    deleteButton: '',
  },
  variants: {
    state: {
      progress: {
        container: 'dark:border-zinc-700',
        icon: '',
        deleteButton: '',
      },
      completed: {
        container: twMerge('border-violet-500', 'dark:border-violet-300/30'),
        icon: '',
        deleteButton: '',
      },
      error: {
        container: twMerge(
          'bg-error-25 border-error-300',
          'dark:bg-error-500/5 dark:border-error-500/30',
        ),
        icon: twMerge(
          'border-error-50 bg-error-100 text-error-600',
          'dark:bg-error-500/5 dark:border-error-500/30 dark:text-error-500',
        ),
        deleteButton: twMerge(
          'text-error-700 hover:text-error-900',
          'dark:text-error-400 dark:hover:text-error-300',
        ),
      },
    },
  },
  defaultVariants: {
    state: 'progress',
  },
})

export type TFileInputContext = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
}

export interface TFileItemProps extends File, VariantProps<typeof fileItem> {
  trashIcon?: JSX.Element
  successIcon?: JSX.Element
  failedMessage?: string
}

export type TTriggerProps = {
  icon?: JSX.Element
  highlightedText?: string
  text?: string
  formatsText?: string
}

export interface TControlProps extends ComponentProps<'input'> {}
