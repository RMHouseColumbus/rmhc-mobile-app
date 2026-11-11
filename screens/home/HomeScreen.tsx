import type { RootTabScreenProps } from "../../types";
import { useContentfulEntries } from "../../hooks/useContentful";
import type { PageLink } from "../../contentful/ContenfulTypes";
import { entries } from "../../contentful/ContenfulTypes";
import HomeContent from "./components/HomeContent";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"RMHC Central Ohio">) {

  const { data, loading } = useContentfulEntries<PageLink>(entries.pageLink);
  const welcomeVideo = data.find(page => page.pageName === "welcome-video");

  return (
    <HomeContent
      videoLink={welcomeVideo?.link}
      loading={loading}
      onManageStay={() => navigation.navigate("YourStayHome")}
    />
  );
}
