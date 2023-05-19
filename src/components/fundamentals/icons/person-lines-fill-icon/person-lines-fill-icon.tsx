import { ComponentMeta } from "@storybook/react"
import React from "react"
import PersonIcons from "."

export default {
  title: "Fundamentals/Icons/SearchIcon",
  component: PersonIcons,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["24", "20", "16"],
      },
    },
  },
} as ComponentMeta<typeof PersonIcons>

const Template = (args) => <PersonIcons {...args} />

export const Icon = Template.bind({})
Icon.args = {
  size: "24",
  color: "currentColor",
}
