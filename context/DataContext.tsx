import { createContext } from "../commons/create-context";
import { ContentfulClient } from "../contentful/ContenfulClient";
import { GCalClient } from "../google_calendar/GCalClient";

export interface ContextValues {
  client: ContentfulClient;
  gcal: GCalClient;
}

export const DataContext: React.Context<ContextValues> = createContext<ContextValues>("app", {
  client: new ContentfulClient(),
  gcal: new GCalClient(),
});
export const { Provider } = DataContext;
