import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { Button, Heading, Text } from "native-base";
import { SVGCard, SVGCardText } from "../../components/SVGCard";
import { brandImages } from "../../assets/brand";
import { cardColors } from "../../constants/Colors";
import { FoodDeliverySVG } from "../neighborhood/components/NeighborhoodCards";

export const CARD_PREVIEW_ROUTE = "CardPreviewDetail";

export function CardPreviewSection() {
  const [narrow, setNarrow] = useState(false);
  const { fontScale } = useWindowDimensions();

  return (
    <View style={styles.section}>
      <Heading size="md">Illustrated cards · #105</Heading>
      <Text>
        Tap Food Delivery to test navigation and Visit our Website to open the browser.
        Try the narrow layout and larger text in device settings.
      </Text>
      <Button
        onPress={() => setNarrow((value) => !value)}
        accessibilityLabel={narrow ? "Show full width cards" : "Show 280 point wide cards"}
      >
        {narrow ? "Use full width" : "Use narrow width (280)"}
      </Button>
      <Text fontSize="xs">Device font scale: {fontScale.toFixed(2)}× · Card width: {narrow ? "280 or available width" : "available width"}</Text>
      <View style={[styles.cards, narrow && styles.narrow]}>
        <SVGCard
          label="Food Delivery"
          artwork={brandImages.meals.source}
          colors={cardColors.lavender}
          navType="navigation"
          navigationTo={CARD_PREVIEW_ROUTE}
        />
        <SVGCard
          label="Visit our Website"
          artwork={brandImages.website.source}
          colors={cardColors.aqua}
          navType="link"
          navigationTo="https://rmhc-centralohio.org/"
        />
        <SVGCard
          label="Find helpful information for your family before, during, and after your stay"
          artwork={brandImages.handsHeart.source}
          colors={cardColors.lime}
          navType="navigation"
          navigationTo={CARD_PREVIEW_ROUTE}
        />
        <SVGCard
          label="Share Your Story"
          artwork={brandImages.story.source}
          colors={cardColors.gold}
          navType="navigation"
          navigationTo={CARD_PREVIEW_ROUTE}
        />
      </View>
      <Heading size="sm">Existing card compatibility</Heading>
      <Text>This uses the original props and artwork. Its existing styling is retained.</Text>
      <SVGCard
        textComponent={<SVGCardText text={["Food", "Delivery"]} />}
        component={<FoodDeliverySVG />}
        navType="navigation"
        navigationTo={CARD_PREVIEW_ROUTE}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: { gap: 16 },
  cards: { gap: 16 },
  narrow: { width: 280, maxWidth: "100%", alignSelf: "center" },
});
