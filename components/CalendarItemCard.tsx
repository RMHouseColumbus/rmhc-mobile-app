import { Box, Text, VStack } from "native-base";
import React from "react";

import type { GoogleCalendarItem } from "../google_calendar/GCalTypes";
import { dateRangeString } from "../commons/time_helpers";

export default function CalendarItemCard({
  start,
  end,
  summary,
  description,
}: GoogleCalendarItem) {
  return (
    <Box borderRadius={20} backgroundColor={"white"} my={"1"}>
      <VStack space={"4"}>
        <Box p={"4"}>
          <Text fontSize={16} fontFamily={"Raleway-Bold"} color={"black"}>
            {summary}
          </Text>
          <Text fontSize={12} fontFamily={"Raleway-Regular"}>
            {dateRangeString(start, end)}
          </Text>
          <Text fontSize={12} fontFamily={"Raleway-Regular"} mt={"1"}>
            {description}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
