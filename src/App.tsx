import { MantineProvider, Text } from '@mantine/core';
import { NavBar } from './Landing/Navbar/NavBar';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to Mantine!</Text>
      <NavBar/>
    </MantineProvider>
  );
}
