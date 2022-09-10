import {
  AppShell,
  Avatar,
  ColorScheme,
  ColorSchemeProvider,
  createStyles,
  Group,
  Header,
  Image,
  MantineProvider,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { HomePage } from "./Landing/HomePage";
import logo from "./Landing/VitalEssenceLogo3.png";
import avatar from "./avatar.jpg";
import AvatarIcon from "./Landing/AvatarIcon";
import { IconBarbell } from "@tabler/icons";
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
            sx={(theme) => ({
              backgroundColor: theme.fn.variant({
                variant: "filled",
                color: theme.primaryColor,
              }).background,
              marginBottom: 0,
            })}
          >
              <Image
                pt={15}
                pl={10}
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
