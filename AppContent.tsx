import Navigation from "./navigation";
import { Provider as DataProvider } from "./context/DataContext";
import { client } from "./contentful/ContenfulClient";
import { gcal } from "./google_calendar/GCalClient";

export default function AppContent() {
  return (
    <DataProvider value={{ client, gcal }}>
      <Navigation colorScheme="light" />
    </DataProvider>
  );
}
