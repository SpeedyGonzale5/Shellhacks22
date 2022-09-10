import {
  Avatar,
  ColorScheme,
  ColorSchemeProvider,
  Header,
  Image,
  MantineProvider,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { HomePage } from "./Landing/HomePage";
import logo from "./Landing/VitalEssenceLogo3.png";
import avatar from "./avatar.jpg";

export default function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

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
        <Header
          height={80}
          sx={(theme) => ({
            backgroundColor: theme.fn.variant({
              variant: "filled",
              color: theme.primaryColor,
            }).background,
            marginBottom: 0,
            justifyContent: "left",
          })}
        >
          <Title>
            <Image
              pt={15}
              pl={10}
              height={50}
              width={400}
              fit="contain"
              src={logo}
            />
          </Title>
          {/* <Avatar src={avatar} alt="@user11627" /> */}
        </Header>
        <HomePage />
        <Title></Title>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
