"use client";
import { AppShell, Text, Button, Group } from "@mantine/core";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function CustomRootLayout({ children }: PropsWithChildren) {
  return (
    <AppShell header={{ height: 100 }}>
      <AppShell.Header style={{ border: "none" }}>
        <Group>
          <Group gap="50" mt={40} ml={100}>
            <Text
              href="/"
              component={Link}
              variant="default"
              size="xl"
              fw={700}
              mr={40}
            >
              Lando
            </Text>
            <Text href="/" component={Link} variant="default" fw={500}>
              Home
            </Text>
            <Text href="/pricing" component={Link} variant="default" fw={500}>
              Pricing
            </Text>
            <Text href="/about" component={Link} variant="default" fw={500}>
              About us
            </Text>
            <Text href="/contact" component={Link} variant="default" fw={500}>
              Contact
            </Text>
          </Group>
          <Group gap="20    " mt={50} ml={100}>
            <Text variant="default" fw={500} ml={450}>
              Log in
            </Text>
            <Button>Sign up</Button>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
