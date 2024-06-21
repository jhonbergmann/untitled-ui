import {ElementType} from 'react'
import {
  Home,
  BarChart,
  SquareStack,
  CheckSquare,
  Flag,
  Users,
  LifeBuoy,
  Cog,
} from 'lucide-react'

export interface TSidebarProps {}

export interface TNavItemProps {
  isSelected?: boolean
  title: string
  icon?: ElementType
  showChevron?: boolean
  settingsSession?: boolean
}

export interface TProfileProps {
  name?: string
  email?: string
  avatar?: string
  onLogout?: () => void
}

export interface TUsedSpaceProps {
  usedSpace?: number
  totalSpace?: number
  title?: string
  description?: string
  cancelButton?: string
  confirmButton?: string
  onCancel?: () => void
  onConfirm?: () => void
}

export const mockNavigationItems: TNavItemProps[] = [
  {title: 'Home'},
  {title: 'Dashboard'},
  {title: 'Projects'},
  {title: 'Tasks'},
  {title: 'Reporting'},
  {title: 'Users'},
  {title: 'Support', settingsSession: true, showChevron: false},
  {
    title: 'Settings',
    settingsSession: true,
    showChevron: false,
    isSelected: true,
  },
]

export const defineIcon = (name: string) => {
  const icons: {[key: string]: ElementType} = {
    home: Home,
    dashboard: BarChart,
    projects: SquareStack,
    tasks: CheckSquare,
    reporting: Flag,
    users: Users,
    support: LifeBuoy,
    settings: Cog,

    // add new icon here.
  }

  return icons[name] || icons.default
}
