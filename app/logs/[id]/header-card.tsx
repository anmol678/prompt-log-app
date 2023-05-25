import { Card, Title, Text } from "@tremor/react";
import { Log } from "@/types/log"

export default async function HeaderCard({ log }: Log) {
    return (
        <Card className="h-[calc(100%)]">
            <Title className="mb-2">{log.function_name}</Title>
            <Text>{log.provider}, {log.model}</Text>
            <Text>{log.tags}</Text>
        </Card>
    )
}
