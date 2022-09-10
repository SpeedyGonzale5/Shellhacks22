import { AppShell, Navbar, Header, Button } from '@mantine/core';

export const NavBar = () => {
    return (
        <AppShell
          padding="md"
          navbar={<Navbar width={{ base: 300 }} height={500} p="xs">
            <Button m="sm"/>
            <Button m="sm"/>
            <Button m="sm"/>
            <Button m="sm"/>
          </Navbar>}
          header={<Header height={60} p="xs">{'Hello 2'}</Header>}
          styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
          })}
        >
          {/* Your application here */}
        </AppShell>
      );
}