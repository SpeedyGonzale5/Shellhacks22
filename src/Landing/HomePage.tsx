import { useState } from "react";
import {
  Navbar,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
} from "@mantine/core";
import {
  TablerIcon,
  IconBarbell,
  IconPill,
  IconRun,
  IconSettings,
} from "@tabler/icons";
import UserColorScheme from "../Styles/UserColorScheme";
import Progress from "../pages/Progress";
import Activity from "../pages/Activity";
import Medication from "../pages/Medication";
import Settings from "../pages/Settings";

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


export function HomePage(props: any) {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {
        setActive(index);
        switch(index) {
            case 0:
                props.active(<Medication/>)
                break;
            case 1:
              props.active(<Activity/>)
                break;
            case 2:
              props.active(<Progress/>)
                break;
            case 3:
              props.active(<Settings title={"Settings"} description={""} data={[{"title": "Opt in for text messages", "description": ""}]}/>)
                break;
            default:
              props.active(<IconRun/>)
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
