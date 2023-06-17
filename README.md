# Plate Chakra UI

Rich text editor implemented with [Plate](https://plate.udecode.io/) and [Chakra UI](https://chakra-ui.com/).

### Known issues

[] Improve link UI/UX (consider using [Popover](https://chakra-ui.com/docs/components/popover) and maybe reimplement the whole component to be more in line with Chakra UI see https://github.com/udecode/plate/blob/main/packages/nodes/link/src/components/FloatingLink/FloatingLink.tsx)
[] Editing links and unlinking doesn't work
[] Aligning elements doesn't work. See the comments such as this one throughout the code:
`// TODO: I don't know how to properly apply it as it doesn't seem to work through Plate's automatic behaviour`
[] Add `ToolbarAlignButton` - it may need a button groups for radio behaviour. see https://chakra-ui.com/docs/components/radio/usage#custom-radio-buttons
