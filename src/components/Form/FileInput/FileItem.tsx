import {tv, VariantProps} from 'tailwind-variants'
import {CheckCircle2, Trash2, UploadCloud} from 'lucide-react'

import {Button} from '@/components/Button'
import {formatBytes} from '@/utils'

const fileItem = tv({
  slots: {
    container: [
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    ],
    icon: [
      'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600',
    ],
    deleteButton: [''],
  },
  variants: {
    state: {
      progress: {
        container: '',
        icon: '',
        deleteButton: '',
      },
      completed: {
        container: 'border-violet-500',
        icon: '',
        deleteButton: '',
      },
      error: {
        container: 'bg-error-25 border-error-300',
        icon: 'border-error-50 bg-error-100 text-error-600',
        deleteButton: 'text-error-700 hover:text-error-900',
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
      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-error-700 text-sm font-medium">
              Upload failed, please try again.
            </span>
            <span className="text-error-600 text-sm">{name}</span>
          </div>
          <button
            className="hover:text-error-900 text-error-700 text-sm font-semibold"
            type="button"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">{name}</span>
            <span className="text-sm text-zinc-500">{formatBytes(size)}</span>
          </div>
          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div
                className="h-2 rounded-full bg-violet-600"
                style={{width: state === 'completed' ? '100%' : '80%'}}
              />
            </div>
            <span className="text-sm font-medium text-zinc-700">
              {state === 'completed' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}
      {state === 'completed' ? (
        <Button type="button" variant="ghost">
          <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
        </Button>
      ) : (
        <Button type="button" variant="ghost" className={deleteButton()}>
          <Trash2 className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}