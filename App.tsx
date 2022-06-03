import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { Provider as DataProvider } from "./context/DataContext";
import { client } from "./contentful/ContenfulClient";
import { gcal } from "./google_calendar/GCalClient";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider>
        <DataProvider value={{ client, gcal }}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </DataProvider>
      </NativeBaseProvider>
    );
  }
}
