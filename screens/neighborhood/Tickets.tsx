import React from "react";
import { Box, Pressable, ScrollView, Spinner, Text } from "native-base";
import { Linking } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useContentfulEntries } from "../../hooks/useContentful";
import { entries } from "../../contentful/ContenfulTypes";
import type { Ticket } from "../../contentful/ContenfulTypes";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import { cardSurface } from "../../constants/CardStyles";

function TicketCard({ title, description, link }: Ticket) {
  const url = link?.trim();
  const card = (
    <Box p={4} my={1} borderRadius={20} style={cardSurface}>
      <Text fontSize={16} fontFamily={Fonts.Bold} color={Colors.text}>{title}</Text>
      <Text fontSize={12} fontFamily={Fonts.Regular} mt={1}>{description}</Text>
    </Box>
  );

  return url ? (
    <Pressable
      accessibilityRole="link"
      accessibilityHint="Opens ticket information in your browser"
      onPress={() => Linking.openURL(url)}
    >
      {card}
    </Pressable>
  ) : card;
}

export default function Tickets() {
  const tabBarHeight = useBottomTabBarHeight();
  const { data, loading } = useContentfulEntries<Ticket>(entries.tickets);
  const tickets = [...data].sort((a, b) =>
    (a.order ?? Infinity) - (b.order ?? Infinity) || a.title.localeCompare(b.title)
  );

  return (
    <ScrollView py={4} px={4} backgroundColor={Colors.background}>
      {loading ? <Spinner accessibilityLabel="Loading tickets" /> : tickets.length ? (
        tickets.map((ticket, index) => <TicketCard key={index} {...ticket} />)
      ) : (
        <Box p={4} borderRadius={20} style={cardSurface}>
          <Text>No attraction tickets are listed right now. Please check back soon.</Text>
        </Box>
      )}
      <Box height={tabBarHeight} />
    </ScrollView>
  );
}
