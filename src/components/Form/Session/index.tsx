import {Conditional} from '@/components/Basics/Conditional'
import {TSessionProps} from '@/components/Form/Session/data'
import {twMerge} from 'tailwind-merge'

export function Session({
  htmlFor,
  title,
  subtitle,
  children,
  className,
  ...props
}: TSessionProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex flex-col gap-3',
        'lg:grid lg:grid-cols-form',
        className,
      )}
    >
      <label
        className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
        htmlFor={htmlFor}
      >
        {title}
        <Conditional render={!!subtitle}>
          <span className="mt-0.5 block text-sm font-normal text-zinc-500">
            {subtitle}
          </span>
        </Conditional>
      </label>
      <div className="grid grid-cols-1 gap-6">{children}</div>
    </div>
  )
}

/* pt-5 */
