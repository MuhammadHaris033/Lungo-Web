import { Image, Text, Title, Stack } from "@mantine/core";
export default function about_page() {
  return (
    <>
      <Stack align="center" justify="center" mt={50}>
        <Title>About us</Title>
        <Text w={350} ta="center">
          We offer revolutionary solution to industry problems. Join Lando
          community and experience the benefits of company optimization today!
        </Text>
        <Image src="/3.png" w={700} h="auto" />
      </Stack>
    </>
  );
}
