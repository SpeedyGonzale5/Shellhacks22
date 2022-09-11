import { TextInput, TextInputProps, ActionIcon, useMantineTheme, Group } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons';
import axios from 'axios';
import { useState } from 'react';
import SearchResults from './SearchResults';

export function SearchBar(props: TextInputProps) {
  const theme = useMantineTheme();
  const [searchString, setSearchString] = useState<string | undefined>(undefined)
  const [clicked, setClicked] = useState(false)
  const [results, setResults] = useState()

if(clicked){  
  let axiosCallString = `https://api.fda.gov/drug/label.json?search=active_ingredient:%22${searchString}%22&limit=1`;

  axios.get(axiosCallString).then((response) => {
    setResults(response.data)
  }).catch((response) => {
    console.log(response);
  })
  setClicked(false)
}

  return (
    <Group position="center" grow>
    <TextInput
      value={searchString}
      onChange={(value) => setSearchString(value.currentTarget.value)}
      icon={<IconSearch size={18} stroke={1.5} />}
      radius="xl"
      width={50}
      size="md"
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
          {theme.dir === 'ltr' ? (
            <IconArrowRight size={18} stroke={1.5} onClick={(input) => {input && setClicked(!clicked)}}/>
          ) : (
            <IconArrowLeft size={18} stroke={1.5} />
          )}
        </ActionIcon>
      }
      placeholder="Search FDA"
      rightSectionWidth={40}
      {...props}
      
    />
    {results && <SearchResults data={results} />}
    </Group>
  );
}