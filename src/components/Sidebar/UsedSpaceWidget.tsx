import {twMerge} from 'tailwind-merge'

import {TUsedSpaceProps} from '@/components/Sidebar/data'

export function UsedSpaceWidget({
  usedSpace = 80,
  title = 'Used space',
  description = `Your team has used ${usedSpace}% of your available space. Need more?`,
  cancelButton = 'Dismiss',
  confirmButton = 'Upgrade plan',
  onCancel = () => {},
  onConfirm = () => {},
}: TUsedSpaceProps) {
  return (
    <div
      className={twMerge(
        'flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5',
        'dark:bg-zinc-800',
      )}
    >
      <div className="space-y-1">
        <span
          className={twMerge(
            'text-sm/5 font-medium text-violet-700',
            'dark:text-zinc-100',
          )}
        >
          {title}
        </span>
        <br />
        <span
          className={twMerge('text-sm/5 text-violet-500', 'dark:text-zinc-400')}
        >
          {description}
        </span>
      </div>
      <div
        className={twMerge(
          'h-2 rounded-full bg-violet-100',
          'dark:bg-zinc-600',
        )}
      >
        <div
          className={twMerge(
            `h-2 w-[${usedSpace}%] rounded-full bg-violet-600`,
            'dark:bg-violet-400',
          )}
        ></div>
      </div>
      <div className="space-x-3">
        <button
          onClick={onCancel}
          type="button"
          className={twMerge(
            'text-sm font-medium text-violet-500 hover:text-violet-700',
            'dark:text-violet-300 dark:hover:text-violet-200',
          )}
        >
          {cancelButton}
        </button>
        <button
          onClick={onConfirm}
          type="button"
          className={twMerge(
            'text-sm font-medium text-violet-700 hover:text-violet-900',
            'dark:text-zinc-300 dark:hover:text-zinc-200',
          )}
        >
          {confirmButton}
        </button>
      </div>
    </div>
  )
}
