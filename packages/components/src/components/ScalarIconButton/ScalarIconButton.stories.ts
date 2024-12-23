import type { Meta, StoryObj } from '@storybook/vue3'

import { ICONS } from '../ScalarIcon/icons'
import ScalarIconButton from './ScalarIconButton.vue'

const meta = {
  component: ScalarIconButton,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'select', options: ICONS },
    size: { control: 'select', options: ['xxs', 'xs', 'sm', 'md'] },
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['solid', 'outlined', 'ghost', 'danger'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A helper wrapper around the icon only ScalarButton',
      },
    },
  },
} satisfies Meta<typeof ScalarIconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: { icon: 'Logo', label: 'Logo button' },
}

export const Disabled: Story = {
  args: { icon: 'Logo', label: 'Logo button', disabled: true },
}
