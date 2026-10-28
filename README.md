# RMHC Mobile App

The Ronald McDonald House Charities of Central Ohio mobile app. It gives guests and visitors information about the House — activities, dining, facilities, hospital services, transportation, and how to find/contact the House — most of it pulled live from a CMS and public calendar feeds.

## Prerequisites

- Node `24.x` (`nvm use` reads `.nvmrc`)
- npm

## Personal device vs. work device

How you can actually see the app running depends on what machine you're developing on:

**On a personal computer**, you have the full workflow available:
- The [Expo Go](https://expo.dev/go) app on your own phone, connected to the same Wi-Fi as your computer — live reload on a real device as you code.
- Optionally, an Android emulator (via Android Studio) and, on a Mac, the iOS Simulator (via Xcode) — useful if you'd rather not use a physical phone.

**On a work computer, this is more limited:**
- Use the **web preview** (`npm run web`, in your laptop's browser) for day-to-day coding. It's a reasonable approximation for layout/logic, but it's not the real native renderer, so it won't catch everything (fonts, native gestures, platform-specific styling).
- To actually confirm something works on a real phone, you need an installed build rather than a live dev server — ask a maintainer about getting set up for TestFlight (iOS) and the Android equivalent.

## Quick start

```sh
git clone https://github.com/RMHouseColumbus/rmhc-mobile-app.git
cd rmhc-mobile-app
npm ci
cp .env.example .env
```

Ask a maintainer for the values in `.env.example` and fill in `.env`. Expo loads `.env` automatically and exposes these values to the app through `app.config.js`; restart Expo after changing them. Do not commit credentials, and don't substitute a service-account JSON file for them.

`npm ci` also applies compatibility patches in `patches/` (NativeBase and the native drawer) via `postinstall`.

Then start the app, using whichever path applies to your setup:

**Personal computer**

```sh
npm start
```

Scan the QR code with Expo Go on your phone. Or, to use the iOS Simulator/Android emulator instead, run `npm run ios`/`npm run android`.

**Work computer** — open it in your browser. `react-native-web` and `normalize-css-color` aren't committed as dependencies yet, so the first time you do this, add them:

```sh
npm install react-native-web normalize-css-color  # first time only
npm run web
```

### Try it without credentials

If you don't have `.env` set up yet, you can still preview the brand foundations (fonts, colors, logos, illustrated cards) with no CMS or feed access. Start the app with:

```sh
npm run brand:preview -- --clear
```

## Tests and checks

```sh
npm test -- --watchAll=false --runInBand
npx tsc --noEmit
```

## Tech stack

- **Expo SDK 58** (React Native 0.88, React 19) — the app is built and run through Expo, not a bare RN project.
- **NativeBase** for themed UI components (buttons, layout, typography).
- **React Navigation** (drawer + bottom tabs + native stack) for screen navigation.
- **Contentful** as the CMS for most page copy and rich text content.
- Five external calendar/data feeds (meals, activities, BHP, Riverside, staff) consumed via `google_calendar/`.
- **Jest** (via `jest-expo`) for tests.
