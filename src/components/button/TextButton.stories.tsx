import TextButton from "./TextButton"
import { ComponentMeta, ComponentStory} from "@storybook/react"

export default {
    title: "Components/Button",
    component: TextButton,
} as ComponentMeta<typeof TextButton>

const Template: ComponentStory<typeof TextButton> = (args) => <TextButton {...args} />;

export const Submit = Template.bind({});
Submit.args = {
  label: 'Button',
};

export const Check = Template.bind({});
Check.args = {
  label: 'Button',
};