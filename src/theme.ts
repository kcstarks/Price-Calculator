import { background, extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      Body: {
        background: "orange.600",
        color: "whiteAlpha.600",
      },
    },   

    components: {
      Heading: {
        fontSize: {
          base: "24px",
        },
      },
    },
  },
});

export default theme;
