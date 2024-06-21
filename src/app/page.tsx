import {Bold, Italic, Link, List, ListOrdered, Mail} from 'lucide-react'
import {twMerge} from 'tailwind-merge'

import * as Input from '@/components/Basics/Input'
import * as FileInput from '@/components/Form/FileInput'
import {Textarea} from '@/components/Form/Textarea'
import {SelectItem} from '@/components/Form/Select/SelectItem'
import {Select} from '@/components/Form/Select'
import {Session} from '@/components/Form/Session'
import {Button} from '@/components/Basics/Button'
import {Tabs} from '@/components/Tabs'

export default function Home() {
  const sessionPage = 'Settings'

  return (
    <>
      {/* session page */}

      <h1
        className={twMerge(
          'text-3xl font-medium text-zinc-900',
          'dark:text-zinc-100',
        )}
      >
        {sessionPage}
      </h1>

      {/* tabs for navigation */}

      <Tabs />

      {/* settings form */}

      <div className="mt-6 flex flex-col">
        <div
          className={twMerge(
            'flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5',
            'lg:flex-row lg:items-center',
            'dark:border-zinc-700',
          )}
        >
          <div className="space-y-1">
            <h2
              className={twMerge(
                'text-lg font-medium text-zinc-900',
                'dark:text-zinc-100',
              )}
            >
              Personal info
            </h2>
            <span
              className={twMerge('text-sm text-zinc-500', 'dark:text-zinc-400')}
            >
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings-form">
              Save
            </Button>
          </div>
        </div>

        {/* form */}

        <form
          id="settings-form"
          className={twMerge(
            'mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200',
            'dark:divide-zinc-700',
          )}
        >
          {/* session of the form to fill in the name */}

          <Session htmlFor="name" title="Name">
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control
                  id="firstName"
                  defaultValue="Jhonatan"
                ></Input.Control>
              </Input.Root>
              <div className="flex flex-col gap-3 lg:block">
                <label
                  className="text-sm font-medium text-zinc-700 lg:sr-only dark:text-zinc-300"
                  htmlFor="lastName"
                >
                  Last name
                </label>
                <Input.Root>
                  <Input.Control
                    id="lastName"
                    defaultValue="Bergmann"
                  ></Input.Control>
                </Input.Root>
              </div>
            </div>
          </Session>

          {/* session of the form to fill in the email */}

          <Session htmlFor="email" title="Email address" className="pt-5">
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="jhonatan@example.com"
              />
            </Input.Root>
          </Session>

          {/* session of the form to fill in the photo */}

          <Session
            htmlFor="photo"
            title="Your photo"
            subtitle="This will be displayed on your profile."
            className="pt-5"
          >
            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.Preview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </Session>

          {/* session of the form to fill in the role */}

          <Session htmlFor="role" title="Role" className="pt-5">
            <Input.Root>
              <Input.Control
                id="role"
                defaultValue="Software Engineer"
              ></Input.Control>
            </Input.Root>
          </Session>

          {/* session of the form to fill in the country */}

          <Session htmlFor="country" title="Country" className="pt-5">
            <Select placeholder="Select a country...">
              <SelectItem text="United States" value="us" />
              <SelectItem text="United Kingdom" value="uk" />
              <SelectItem text="Germany" value="de" />
              <SelectItem text="France" value="fr" />
              <SelectItem text="Spain" value="es" />
            </Select>
          </Session>

          {/* session of the form to fill in the timezone */}

          <Session htmlFor="timezone" title="Timezone" className="pt-5">
            <Select placeholder="Select a timezone...">
              <SelectItem text="Pacific Daylight Time (UTC−07:00)" value="uk" />
              <SelectItem text="Pacific Standard Time (UTC−08:00)" value="de" />
            </Select>
          </Session>

          {/* session of the form to fill in the bio */}

          <Session
            htmlFor="bio"
            title="Bio"
            subtitle="Write a short introduction."
            className="pt-5"
          >
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem text="Normal Text" value="normal" />
                  <SelectItem text="Markdown" value="md" />
                </Select>
                <div className="flex items-center gap-4">
                  <Button type="button" variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue="As a software engineer, I thrive on crafting elegant solutions to complex problems using lines of code. My days are filled with designing algorithms, debugging issues, and collaborating with teams to create software that transforms ideas into reality. From architecting scalable systems to ensuring every function performs flawlessly, I am dedicated to writing clean, efficient code that users can rely on. Continuous learning and adapting to new technologies are not just part of my job but a passion that drives me forward in this dynamic field."
              />
            </div>
          </Session>

          {/* session of the form to fill in the portfolio */}

          <Session
            htmlFor="portfolio"
            title="Portfolio"
            subtitle="Share a few snippets of your work."
            className="pt-5"
          >
            <FileInput.Root className="flex flex-col gap-1">
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </Session>

          {/* submit or cancel */}

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings-form">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
