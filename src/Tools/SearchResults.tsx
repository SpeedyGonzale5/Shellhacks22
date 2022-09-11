import { Card, Divider, Group, ScrollArea, Stack, Title } from "@mantine/core";

export default function SearchResults(props: any) {
    props.data?.results[0] && console.log(props.data?.results[0])
    let ingredients = props.data?.results[0].active_ingredient.map((evt: string, index: number) => {
        return(<Stack>
            {evt}
            <Divider my="sm" />
        </Stack>)
    })
    let usage = props.data?.results[0].dosage_and_administration.map((evt: string, index: number) => {
        return(<Stack>
            {evt}
            <Divider my="sm" />
        </Stack>)
    })
    let purpose = props.data?.results[0].purpose.map((evt: string, index: number) => {
        return(<Stack>
            {evt}
            <Divider my="sm" />
        </Stack>)
    })
    let warnings = props.data?.results[0].warnings.map((evt: string, index: number) => {
        return(<Stack>
            {evt}
            <Divider my="sm" />
        </Stack>)
    })
    return(
    <Group position="right">
        <ScrollArea>
            <div>
            <Title align="center">Active Ingredients</Title>
            <Card>
                {ingredients}
            </Card>
            </div>
            <div>
            <Title align="center">Dosage and Usage</Title>
            <Card>
                {usage}
            </Card>
            </div>
            <div>
            <Title align="center">Purpose</Title>
            <Card>
                {purpose}
            </Card>
            </div>
            <div>
            <Title align="center">Warnings</Title>
            <Card>
                {warnings}
            </Card>
            </div>
        </ScrollArea>
        
    </Group>
    )
}