import {Mail, UploadCloud, User} from 'lucide-react'

import {SettingsTabs} from '@/components/SettingsTabs'
import * as Input from '@/components/Input'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
              type="button"
            >
              Cancel
            </button>
            <button
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              type="submit"
              form="settings-form"
            >
              Save
            </button>
          </div>
        </div>

        <form
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
          id="settings-form"
        >
          <div className="grid-cols-form grid gap-3">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="firstName"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control
                  id="firstName"
                  defaultValue={'Jhonatan'}
                ></Input.Control>
              </Input.Root>

              <Input.Root>
                <Input.Control
                  id="lastName"
                  defaultValue={'Bergmann'}
                ></Input.Control>
              </Input.Root>
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="email"
            >
              Email address
            </label>
            <div className="grid grid-cols-2 gap-6">
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

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="photo"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
                <User className="h-8 w-8 text-violet-500" />
              </div>

              <label
                className="hover:bg-violet-25 group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:text-violet-500"
                htmlFor="photo"
              >
                <div className="border-6 rounded-full border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
                  <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600" />
                </div>

                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm">
                    <span className="font-semibold text-violet-700">
                      {'Click to upload '}
                    </span>
                    {'or drag and drop'}
                  </span>
                  <span className="text-xs">
                    {'SVG, PNG, JPG or GIF (max. 800x400px)'}
                  </span>
                </div>
              </label>

              <input className="sr-only" type="file" id="photo" />
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label className="text-sm font-medium text-zinc-700" htmlFor="role">
              Role
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control
                  id="role"
                  defaultValue={'Product Designer'}
                ></Input.Control>
              </Input.Root>
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="country"
            >
              Country
            </label>
            <div className="grid grid-cols-2 gap-6">
              <div />
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="timezone"
            >
              Timezone
            </label>
            <div className="grid grid-cols-2 gap-6">
              <div />
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="grid grid-cols-2 gap-6">
              <div />
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label className="text-sm font-medium text-zinc-700">
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <div className="grid grid-cols-2 gap-6">
              <div />
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
              type="button"
            >
              Cancel
            </button>
            <button
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
