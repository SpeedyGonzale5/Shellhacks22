import { useState } from "react";
import { useInterval } from '@mantine/hooks';
import { Button, createStyles, Card,  Group, Progress, Switch, Select, Text, TextInput } from '@mantine/core';


const useStyles = createStyles((theme) => ({
    
    //styling for submit button
    button: {
        position: 'relative',
        transition: 'background-color 150ms ease',
      },
    
      progress: {
        position: 'absolute',
        bottom: -1,
        right: -1,
        left: -1,
        top: -1,
        height: 'auto',
        backgroundColor: 'transparent',
        zIndex: 0,
      },
    
      labelb: {
        position: 'relative',
        zIndex: 1,
      },

    root: {
        position: 'relative',
      },
    
      input: {
        height: 'auto',
        paddingTop: 18,
      },
    
      label: {
        position: 'absolute',
        pointerEvents: 'none',
        fontSize: theme.fontSizes.xs,
        paddingLeft: theme.spacing.sm,
        paddingTop: theme.spacing.sm / 2,
        zIndex: 1,
      },

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
  const { classes, theme } = useStyles();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  
  //used for submit button
  const interval = useInterval(
    () =>
      setProgress((current) => {
        if (current < 100) {
          return current + 1;
        }

        interval.stop();
        setLoaded(true);
        return 0;
      }),
    20
  );

  //Constant below stores the data from the input
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
      <div>
      <TextInput label="Phone Number" placeholder="e.g. 999-999-9999" onChange={withEvent(setPhoneNumber)} classNames={classes} />
      <TextInput label="Age"  onChange={withEvent(setAge)} classNames={classes} />
      <TextInput label="Weight"  onChange={withEvent(setWeight)} classNames={classes} />
      <TextInput label="Height"  onChange={withEvent(setHeight)} classNames={classes} />
      <Button
      fullWidth
      className={classes.button}
      onClick={() => (loaded ? setLoaded(false) : !interval.active && interval.start())}
      color={loaded ? 'teal' : theme.primaryColor}
    >
      <div className={classes.labelb}>
        {progress !== 0 ? 'Submit' : loaded ? 'Submitted' : 'Submit'}
      </div>
      {progress !== 0 && (
        <Progress
          value={progress}
          className={classes.progress}
          color={theme.fn.rgba(theme.colors[theme.primaryColor][2], 0.35)}
          radius="sm"
        />
      )}
    </Button>
      </div>
     
    {/* Need to get onclick on button */}
      {/* <label>Height: </label>
      <input type="text" onChange={withEvent(setHeight)}></input>
      <br/>
      <button onClick={withEvent(submitData)}>Submit</button> */}
    </Card>
    </>
  );

  
}

