import { useContext, useEffect, useState } from "react";

import { DataContext } from "../context/DataContext";
import type { FeedType } from "../google_calendar/CalendarFeeds";
import type { GoogleCalendarItem } from "../google_calendar/GCalTypes";

export function useFeed(feed: FeedType) {
  const { gcal } = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<GoogleCalendarItem[]>([]);

  const execute = async () => {
    setLoading(true);
    const fetched = await gcal.getFeed(feed);
    setData(fetched);
    setLoading(false);
  };

  useEffect(() => {
    execute();
  }, [feed]);

  const result = () => ({
    data,
    loading,
  });

  return result();
}
