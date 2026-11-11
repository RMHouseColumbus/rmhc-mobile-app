import { Box, Text } from "native-base";
import React from "react";

import type { GoogleCalendarItem } from "../google_calendar/GCalTypes";
import { dateRangeString } from "../commons/time_helpers";
import { cardSurface } from "../constants/CardStyles";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";

export default function CalendarItemCard({
  start,
  end,
  summary,
  description,
}: GoogleCalendarItem) {
  return (
    <Box borderRadius={20} style={cardSurface} my={"1"} p={"4"}>
      <Text fontSize={18} fontFamily={Fonts.Bold} color={Colors.text}>
        {summary}
      </Text>
      <Text fontSize={14} fontFamily={Fonts.Regular} color={Colors.textMuted} mt={"1"}>
        {dateRangeString(start, end)}
      </Text>
      <Text fontSize={14} fontFamily={Fonts.Regular} color={Colors.text} mt={"2"}>
        {description}
      </Text>
    </Box>
  );
}
