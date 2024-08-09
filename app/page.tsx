"use client";
import { Image, Text, Button, Group, Title, Stack } from "@mantine/core";
export default function Home() {
  return (
    <>
      <Group gap={520}>
        <Group gap={530} mt={70} display="block" ml={100}>
          <Stack align="flex-start" justify="flex-start">
            <Text variant="default" fw={500} size="xs" c="grey">
              - FREE 30 DAY TRIAL
            </Text>
            <Title variant="default" fw={700} order={1} fz={50} w={370}>
              The best way to showcase your project.
            </Title>
            <Text variant="default" fw={500} size="xs" mt={20} c="grey">
              Here you can put a short description about your project.
            </Text>
          </Stack>
          <Group mt={30}>
            <Button variant="filled" color="indigo" radius={10}>
              Try for free
            </Button>
            <Button variant="outline" color="black" radius={10}>
              See how it works
            </Button>
          </Group>
        </Group>
        <Group>
          <Image src="/11.png" w={300} h="auto" />
        </Group>
      </Group>
      <Stack align="center" gap={2}>
        <Text fw={500} mt={40}>
          Trusted by individuals and teams at the world's
        </Text>
        <Text fw={500}>best companies</Text>
        <Image src="/2.png" w={600} h="auto" />
      </Stack>
    </>
  );
}
