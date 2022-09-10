import { useEffect, useState } from "react";
import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
  Title,
  Group,
  Header,
} from "@mantine/core";
import {
  TablerIcon,
  IconBarbell,
  IconPill,
  IconRun,
  IconSettings,
} from "@tabler/icons";
import UserColorScheme from "../Styles/UserColorScheme";
import Medication from "../pages/Medication";

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.white,
    opacity: 0.85,

    "&:hover": {
      opacity: 1,
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.blue[3],
    },
  },

  active: {
    opacity: 1,
    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.blue[9],
    },
  },
}));

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconPill, label: "Medications" },
  { icon: IconBarbell, label: "Activity" },
  { icon: IconRun, label: "Progression" },
  { icon: IconSettings, label: "Settings" },
];

let activePage;

export function HomePage() {
  const [active, setActive] = useState(2);
  const [activePage, setActivePage] = useState(<IconBarbell/>);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {
        setActive(index);
        switch(index) {
            case 0:
                setActivePage(<IconPill/>)
                break;
            case 1:
                setActivePage(<IconBarbell/>)
                break;
            case 2:
                setActivePage(<IconRun/>)
                break;
            case 3:
                setActivePage(<IconSettings/>)
                break;
            default:
                setActivePage(<IconRun/>)
                break;
        }
    }}
    />
  ));

  return (
      <Navbar
        width={{ base: 80 }}
        p="md"
        sx={(theme) => ({
          backgroundColor: theme.fn.variant({
            variant: "filled",
            color: theme.primaryColor,
          }).background,
        })}
      >
        
        <Navbar.Section grow>
          <Stack justify="center" spacing={10}>
            {links}
          </Stack>
        </Navbar.Section>
        <Navbar.Section>
          <Stack align="center" justify="center" spacing={0}>
            <UserColorScheme />
          </Stack>
        </Navbar.Section>
      </Navbar>
  );
}
