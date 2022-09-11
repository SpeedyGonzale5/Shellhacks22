import {
  createStyles,
  Card,
  Group,
  Switch,
  Text,
  Slider,
  NumberInput,
  Divider,
  Title,
} from "@mantine/core";
import { useState } from "react";
import TwilioSubscribe from "../Tools/TwilioSubscribe";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  item: {
    "& + &": {
      paddingTop: theme.spacing.sm,
      marginTop: theme.spacing.sm,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },
  },

  switch: {
    "& *": {
      cursor: "pointer",
    },
  },

  title: {
    lineHeight: 1,
  },
  wrapper: {
    position: "relative",
  },

  input: {
    height: "auto",
    paddingTop: 22,
    paddingBottom: 3,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },

  label: {
    position: "absolute",
    pointerEvents: "none",
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },

  slider: {
    position: "absolute",
    width: "100%",
    bottom: -1,
  },

  thumb: {
    width: 16,
    height: 16,
  },

  track: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },
}));

export default function Settings() {
  const { classes } = useStyles();
  const [ageValue, setAgeValue] = useState<number | undefined>(21);
  const [weightValue, setWeightValue] = useState<number | undefined>(150);
  const [heightFTValue, setHeightFTValue] = useState<number | undefined>(6);
  const [heightINValue, setHeightINValue] = useState<number | undefined>(1);

  const [messagesEnable, setMessagesEnable] = useState(false);

  const BMICalculator = () => {
    if((!weightValue || weightValue === 0) || (!heightINValue || heightINValue === 0) || (!heightFTValue || heightFTValue === 0)){
        return "Please Fill All Fields"
    }
    const weightConv = weightValue*703;
    const heightINCHES = (heightFTValue*12)+(heightINValue);

    return ((weightConv/(heightINCHES*heightINCHES)).toPrecision(4)).toString();
  }

  return (
    <Card withBorder radius="md" p="xl" className={classes.card}>
      <Text size="lg" className={classes.title} weight={500}>
        User Settings
      </Text>
      <Text size="xs" color="dimmed" mt={3} mb="xl">
      </Text>

      <Group position="apart" className={classes.item} noWrap spacing="xl">
        <div>
          <Text>Messages</Text>
          <Text size="xs" color="dimmed">Opt in for text messages</Text>
        </div>
        <Switch
          onLabel="ON"
          offLabel="OFF"
          onChange={(evt)=>(setMessagesEnable(evt.target.checked))}
          className={classes.switch}
          size="lg"
        />
      </Group>
      {messagesEnable && <TwilioSubscribe/>}
      <Divider my="sm" />
      <div className={classes.wrapper}>
        <NumberInput
          value={ageValue}
          onChange={setAgeValue}
          label="Age"
          placeholder="13-100"
          step={1}
          min={13}
          max={100}
          hideControls
          classNames={{ input: classes.input, label: classes.label }}
        />
        <Slider
          max={100}
          step={1}
          min={13}
          label={null}
          value={ageValue}
          onChange={setAgeValue}
          size={2}
          radius={0}
          className={classes.slider}
          classNames={{ thumb: classes.thumb, track: classes.track }}
        />
      </div>
      <Divider my="sm" />
      <div className={classes.wrapper}>
        <NumberInput
          value={weightValue}
          onChange={setWeightValue}
          label="Weight"
          placeholder="0-300 lbs"
          step={1}
          min={0}
          max={300}
          hideControls
          classNames={{ input: classes.input, label: classes.label }}
        />
        <Slider
          max={300}
          step={1}
          min={0}
          label={null}
          value={weightValue}
          onChange={setWeightValue}
          size={2}
          radius={0}
          className={classes.slider}
          classNames={{ thumb: classes.thumb, track: classes.track }}
        />
      </div>
      <Divider my="sm" />
      <div className={classes.wrapper}>
        <NumberInput
          value={heightFTValue}
          onChange={setHeightFTValue}
          label="Height - in feet"
          placeholder="1 - 10ft"
          step={1}
          min={0}
          max={10}
          hideControls
          classNames={{ input: classes.input, label: classes.label }}
        />
        <Divider my="sm" />
        <NumberInput
          value={heightINValue}
          onChange={setHeightINValue}
          label="Height - in inches"
          placeholder="1 - 12in"
          step={1}
          min={0}
          max={12}
          hideControls
          classNames={{ input: classes.input, label: classes.label }}
        />
      </div>
      <Divider my="sm" />
      <Group position="apart" className={classes.item} noWrap spacing="xl">
        <div>
          <Text>BMI</Text>
          <Text size="xs" color="dimmed">Body Mass Index</Text>
        </div>
        <Title>{BMICalculator()}</Title>
      </Group>
    </Card>
  );
}
