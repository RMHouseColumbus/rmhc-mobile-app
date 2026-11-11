import { extendTheme } from "native-base";
import Colors from "./Colors";
import Fonts from "./Fonts";

const regular = { normal: Fonts.Regular, italic: Fonts.Italic };
const bold = { normal: Fonts.Bold, italic: Fonts.BoldItalic };

export const brandTheme = extendTheme({
  config: { initialColorMode: "light", useSystemColorMode: false },
  fonts: { body: "AudreyText", heading: "AudreyText", mono: "space-mono" },
  fontConfig: {
    AudreyText: {
      // Select real files for every NativeBase weight (including its defaults).
      100: regular, 200: regular, 300: regular, 400: regular, 500: regular,
      600: bold, 700: bold, 800: bold, 900: bold, 950: bold,
    },
  },
  colors: { brand: { background: Colors.background, text: Colors.text, action: Colors.action } },
  components: {
    Text: { baseStyle: { color: Colors.text, fontFamily: "body", fontStyle: "normal", fontWeight: "normal" } },
    Heading: { baseStyle: { color: Colors.text, fontFamily: "heading", fontStyle: "normal", fontWeight: "bold" } },
  },
});
