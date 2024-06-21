import {CheckCircle2, Trash2, UploadCloud} from 'lucide-react'
import {twJoin, twMerge} from 'tailwind-merge'

import {formatBytes} from '@/utils'
import {Conditional} from '@/components/Basics/Conditional'
import {Button} from '@/components/Basics/Button'
import {TFileItemProps, fileItem} from '@/components/Form/FileInput/data'

export function FileItem({
  state,
  name,
  size,
  trashIcon = <Trash2 className="h-5 w-5" />,
  successIcon = <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />,
  failedMessage = 'Upload failed, please try again.',
}: TFileItemProps) {
  const {container, icon, deleteButton} = fileItem({state})

  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>
      <Conditional render={state === 'error'}>
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span
              className={twMerge(
                'text-sm font-medium text-error-700',
                'dark:text-error-400',
              )}
            >
              {failedMessage}
            </span>
            <span
              className={twMerge(
                'text-sm text-error-600',
                'dark:text-error-500',
              )}
            >
              {name}
            </span>
          </div>
          <button
            type="button"
            className={twMerge(
              'text-sm font-semibold text-error-700 hover:text-error-900',
              'dark:text-error-400 dark:hover:text-error-300',
            )}
          >
            Try again
          </button>
        </div>
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span
              className={twMerge(
                'text-sm font-medium text-zinc-700',
                'dark:text-zinc-100',
              )}
            >
              {name}
            </span>
            <span
              className={twMerge('text-sm text-zinc-500', 'dark:text-zinc-400')}
            >
              {formatBytes(size)}
            </span>
          </div>
          <div className="flex w-full items-center gap-3">
            <div
              className={twJoin(
                'h-2 flex-1 rounded-full bg-zinc-100',
                'dark:bg-zinc-600',
              )}
            >
              <Conditional render={state === 'completed'}>
                <div
                  className={twMerge(
                    'h-2 rounded-full bg-violet-600',
                    'dark:bg-violet-400',
                  )}
                  style={{width: '100%'}}
                />
                <div
                  className={twMerge(
                    'h-2 rounded-full bg-violet-600',
                    'dark:bg-violet-400',
                  )}
                  style={{width: '80%'}}
                />
              </Conditional>
            </div>
            <span
              className={twMerge(
                'text-sm font-medium text-zinc-700',
                'dark:text-zinc-300',
              )}
            >
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
          {successIcon}
        </Button>
        <Button type="button" variant="ghost" className={deleteButton()}>
          {trashIcon}
        </Button>
      </Conditional>
    </div>
  )
}
