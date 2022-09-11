import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  Group,
  Header,
  Image,
  MantineProvider,
} from "@mantine/core";
import { useState } from "react";
import { HomePage } from "./Landing/HomePage";
import logo from "./Landing/VitalEssenceLogo3.png";
import AvatarIcon from "./Landing/AvatarIcon";
import Progress from "./pages/Progress";



export default function App() {

  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
    const [activePage, setActivePage] = useState(<Progress/>);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppShell
          navbar={<HomePage active={setActivePage}/>}
          header={<Header
            height={80}
            withBorder={false}
            sx={(theme) => ({
              backgroundColor: theme.fn.variant({
                variant: "filled",
                color: theme.primaryColor,
              }).background,
            })}
          >
              <Image
                pt={15}
                pl={0}
                height={50}
                width={400}
                fit="contain"
                src={logo}
              />
            <Group position="right" mt={-20}><AvatarIcon /></Group>
          </Header>}
          // aside={<AvatarIcon />}
        >
          {activePage}
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
