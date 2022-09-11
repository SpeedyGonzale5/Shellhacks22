import { useState } from "react";

import { createStyles, Card, Group, Switch, Text } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  item: {
    '& + &': {
      paddingTop: theme.spacing.sm,
      marginTop: theme.spacing.sm,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },
  },

  switch: {
    '& *': {
      cursor: 'pointer',
    },
  },

  title: {
    lineHeight: 1,
  },
}));

interface SwitchesCardProps {
  title: string;
  description: string;
  data: {
    title: string;
    description: string;
  }[];
}
function withEvent(func: Function): React.ChangeEventHandler<any> {
    return (event: React.ChangeEvent<any>) => {
      const { target } = event;
      func(target.value);
    };
  }

export default function Settings({ title, description, data }: SwitchesCardProps) {
  const { classes } = useStyles();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const submitData = () => {
    console.log(`${phoneNumber} - ${age} - ${weight} - ${height}`);
}
  const items = data.map((item) => (
    <Group position="apart" className={classes.item} noWrap spacing="xl" key={item.title}>
      <div >
        <Text>{item.title}</Text>
        <Text size="xs" color="dimmed">
          {item.description}
        </Text>
      </div>
      <Switch onLabel="ON" offLabel="OFF" className={classes.switch} size="lg" />
    </Group>
  ));

  return (
    <>
    <Card withBorder radius="md" p="xl" className={classes.card}>
      <Text size="lg" className={classes.title} weight={500}>
        {title}
      </Text>
      <Text size="xs" color="dimmed" mt={3} mb="xl">
        {description}
      </Text>
      {items}
      <label>Phone Number: </label>
      <input type="text" onChange={withEvent(setPhoneNumber)}></input>
      <br/>
      <label>Age: </label>
      <input type="text" onChange={withEvent(setAge)}></input>
      <br/>
      <label>Weight: </label>
      <input type="text" onChange={withEvent(setWeight)}></input>
      <br/>
      <label>Height: </label>
      <input type="text" onChange={withEvent(setHeight)}></input>
      <br/>
      <button onClick={withEvent(submitData)}>Submit</button>
    </Card>
    </>
  );
}
