export interface TTabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export const mockTabs: TTabItemProps[] = [
  {value: 'tab1', title: 'My details'},
  {value: 'tab2', title: 'Profile'},
  {value: 'tab3', title: 'Password'},
  {value: 'tab4', title: 'Team'},
  {value: 'tab5', title: 'Plan'},
  {value: 'tab6', title: 'Billing'},
  {value: 'tab7', title: 'Email'},
  {value: 'tab8', title: 'Notifications'},
  {value: 'tab9', title: 'Integrations'},
  {value: 'tab10', title: 'API'},
]
