import { Image, Text, Button, Flex, Input, Title, Stack } from "@mantine/core";
export default function Contact_page() {
  return (
    <>
      <Flex mt={70} ml={150} gap={300}>
        <Image src="/4.png" w={400} h="auto" />
        <Stack>
          <Title fz={40} fw={700}>
            Contact us
          </Title>
          <Text w={200}>
            Explore the future with us. Feel free to get in touch.
          </Text>
          <Text w={200} size="xs">
            Name
          </Text>
          <Input
            variant="default"
            placeholder="Full Name"
            bg="white"
            c="black"
            w={300}
            fw={600}
          />
          <Text w={200} size="xs">
            Email
          </Text>
          <Input
            variant="default"
            placeholder="Email address"
            bg="white"
            c="black"
            w={300}
            fw={600}
          />
          <Text w={200} size="xs">
            Message
          </Text>
          <Input
            variant="default"
            placeholder="How can we get better"
            bg="white"
            c="black"
            w={300}
            fw={600}
          />
          <Button w={300} radius={10} bg="#228BE6">
            Send Message
          </Button>
        </Stack>
      </Flex>
    </>
  );
}
