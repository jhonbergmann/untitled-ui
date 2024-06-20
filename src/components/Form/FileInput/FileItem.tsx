import {tv, VariantProps} from 'tailwind-variants'
import {CheckCircle2, Trash2, UploadCloud} from 'lucide-react'

import {Conditional} from '@/components/Basics/Conditional'
import {Button} from '@/components/Button'
import {formatBytes} from '@/utils'

const fileItem = tv({
  slots: {
    container: [
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    ],
    icon: [
      'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500 ',
    ],
    deleteButton: [''],
  },
  variants: {
    state: {
      progress: {
        container: 'dark:border-zinc-700',
        icon: '',
        deleteButton: '',
      },
      completed: {
        container: 'border-violet-500 dark:border-violet-300/30',
        icon: '',
        deleteButton: '',
      },
      error: {
        container:
          'bg-error-25 border-error-300 dark:bg-error-500/5 dark:border-error-500/30',
        icon: 'border-error-50 bg-error-100 text-error-600 dark:bg-error-500/5 dark:border-error-500/30 dark:text-error-500',
        deleteButton:
          'text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300',
      },
    },
  },
  defaultVariants: {
    state: 'progress',
  },
})

interface TFileItemProps extends File, VariantProps<typeof fileItem> {}

export function FileItem({state, name, size}: TFileItemProps) {
  const {container, icon, deleteButton} = fileItem({state})

  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>
      <Conditional render={state === 'error'}>
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-error-700 dark:text-error-400">
              Upload failed, please try again.
            </span>
            <span className="text-sm text-error-600 dark:text-error-500">
              {name}
            </span>
          </div>
          <button
            className="text-sm font-semibold text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300"
            type="button"
          >
            Try again
          </button>
        </div>
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
              {name}
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {formatBytes(size)}
            </span>
          </div>
          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100 dark:bg-zinc-600">
              <Conditional render={state === 'completed'}>
                <div
                  className="h-2 rounded-full bg-violet-600 dark:bg-violet-400"
                  style={{width: '100%'}}
                />
                <div
                  className="h-2 rounded-full bg-violet-600 dark:bg-violet-400"
                  style={{width: '80%'}}
                />
              </Conditional>
            </div>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              <Conditional render={state === 'completed'}>
                <span>100%</span>
                <span>80%</span>
              </Conditional>
            </span>
          </div>
        </div>
      </Conditional>
      <Conditional render={state === 'completed'}>
        <Button type="button" variant="ghost">
          <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
        </Button>
        <Button type="button" variant="ghost" className={deleteButton()}>
          <Trash2 className="h-5 w-5" />
        </Button>
      </Conditional>
    </div>
  )
}
