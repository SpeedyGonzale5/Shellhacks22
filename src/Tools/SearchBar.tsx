import { TextInput, TextInputProps, ActionIcon, useMantineTheme, Group } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons';

export function SearchBar(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <Group position="center" grow>
    <TextInput
      icon={<IconSearch size={18} stroke={1.5} />}
      radius="xl"
      width={50}
      size="md"
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
          {theme.dir === 'ltr' ? (
            <IconArrowRight size={18} stroke={1.5} />
          ) : (
            <IconArrowLeft size={18} stroke={1.5} />
          )}
        </ActionIcon>
      }
      placeholder="Search FDA"
      rightSectionWidth={40}
      {...props}
    />
    </Group>
  );
}