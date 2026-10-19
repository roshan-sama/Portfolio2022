import {
  Avatar,
  Badge,
  createTheme,
  MantineColorsTuple,
} from "@mantine/core";

const altPurple: MantineColorsTuple = [
  "#eee5ff",
  "#ccb4fb",
  "#ac82f9",
  "#8b50f8",
  "#6c22f7",
  "#540dde",
  "#4108ac",
  "#2f047b",
  "#1c024a",
  "#09001a",
];

// Dark palette from before the Mantine upgrade, so dark mode surfaces keep the same look
const dark: MantineColorsTuple = [
  "#C1C2C5",
  "#A6A7AB",
  "#909296",
  "#5c5f66",
  "#373A40",
  "#2C2E33",
  "#25262b",
  "#1A1B1E",
  "#141517",
  "#101113",
];

export const theme = createTheme({
  primaryColor: "grape",
  colors: {
    "alt-purple": altPurple,
    dark,
  },
  components: {
    // Defaults that changed between Mantine 3 and today; keep the original look
    Badge: Badge.extend({ defaultProps: { variant: "light" } }),
    Avatar: Avatar.extend({ defaultProps: { radius: "md" } }),
  },
});

/** Same key the pre-Mantine-7 version used, so visitors keep their saved theme. */
export const colorSchemeStorageKey = "color-scheme";
