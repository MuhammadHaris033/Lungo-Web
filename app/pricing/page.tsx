import { Card, Text, Button, Group, Title, Stack } from "@mantine/core";

export default function pricing_page() {
  return (
    <>
      <Stack align="center" justify="center" mt={80}>
        <Title fw={700}>Pricing</Title>
        <Text w={300}>
          Our pricing is not expensive, but it's not cheap either, it's exactly
          what it should be
        </Text>
        <Group gap={0}>
          <Card shadow="xl" w={320} h={320} radius={20} withBorder>
            <Text fw={500} fz={30}>
              Basic
            </Text>
            <Group gap={0}>
              <Text mt={0} fz={30} fw={700}>
                $
              </Text>
              <Text fz={50} fw={700}>
                9
              </Text>
              <Text pt={20}>/month</Text>
            </Group>
            <Text w={210}>For individuals and small teams</Text>
            <Button
              w={240}
              radius={10}
              mt={40}
              ml={20}
              variant="outline"
              color="black"
            >
              Get Started with Basic
            </Button>
          </Card>
          <Card shadow="xl" w={320} h={350} radius={20} withBorder>
            <Card
              bg="#1D72FE"
              c="white"
              w="132"
              pl={20}
              pr={20}
              pt={5}
              pb={5}
              radius={30}
              ml={150}
            >
              <Text fz={15} fw={600}>
                Most Popular
              </Text>
            </Card>
            <Text fw={500} fz={30}>
              Pro
            </Text>
            <Group gap={0}>
              <Text mt={0} fz={30} fw={700}>
                $
              </Text>
              <Text fz={50} fw={700}>
                19
              </Text>
              <Text pt={20}>/month</Text>
            </Group>
            <Text w={210}>For startups and growing business</Text>
            <Button w={240} radius={10} bg="#1D72FE" mt={40} ml={20}>
              Get Started with Pro
            </Button>
          </Card>
          <Card shadow="xl" w={320} h={320} radius={30} withBorder>
            <Text fw={500} fz={30}>
              Business
            </Text>
            <Group gap={0}>
              <Text mt={0} fz={30} fw={700}>
                $
              </Text>
              <Text fz={50} fw={700}>
                99
              </Text>
              <Text pt={20}>/month</Text>
            </Group>
            <Text w={210}>For organizations with advanced needs</Text>
            <Button
              w={240}
              radius={10}
              mt={40}
              ml={20}
              variant="outline"
              color="black"
            >
              Get Started with Business
            </Button>
          </Card>
        </Group>
      </Stack>
    </>
  );
}
