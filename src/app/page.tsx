import {Bold, Italic, Link, List, ListOrdered, Mail} from 'lucide-react'

import * as Input from '@/components/Input'
import {SettingsTabs} from '@/components/SettingsTabs'

import {Textarea} from '@/components/Form/Textarea'
import * as FileInput from '@/components/Form/FileInput'
import {SelectItem} from '@/components/Form/Select/SelectItem'
import {Select} from '@/components/Form/Select'
import {Button} from '@/components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center dark:border-zinc-700">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
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

        <form
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
          id="settings-form"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              htmlFor="firstName"
            >
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control
                  id="firstName"
                  defaultValue={'Jhonatan'}
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
                    defaultValue={'Bergmann'}
                  ></Input.Control>
                </Input.Root>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              htmlFor="email"
            >
              Email address
            </label>
            <div className="grid grid-cols-1 gap-6">
              <Input.Root>
                <Input.Prefix>
                  <Mail className="h-5 w-5 text-zinc-500" />
                </Input.Prefix>
                <Input.Control
                  id="email"
                  type="email"
                  defaultValue={'jhonatan@example.com'}
                ></Input.Control>
              </Input.Root>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              htmlFor="photo"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.Preview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              htmlFor="role"
            >
              Role
            </label>
            <div className="grid grid-cols-1 gap-6">
              <Input.Root>
                <Input.Control
                  id="role"
                  defaultValue={'Product Designer'}
                ></Input.Control>
              </Input.Root>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              htmlFor="country"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem text="United States" value="us" />
              <SelectItem text="United Kingdom" value="uk" />
              <SelectItem text="Germany" value="de" />
              <SelectItem text="France" value="fr" />
              <SelectItem text="Spain" value="es" />
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              htmlFor="timezone"
            >
              Timezone
            </label>
            <div className="grid grid-cols-1 gap-6">
              <Select placeholder="Select a timezone...">
                <SelectItem
                  text="Pacific Daylight Time (UTC−07:00)"
                  value="uk"
                />
                <SelectItem
                  text="Pacific Standard Time (UTC−08:00)"
                  value="de"
                />
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem text="Normal Text" value="normal" />
                  <SelectItem text="Markdown" value="md" />
                </Select>
                <div className="flex items-center gap-1">
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
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root className="flex flex-col gap-1">
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

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
