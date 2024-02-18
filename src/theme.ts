import {
  background,
  extendTheme,
  ModalContent,
  Modal,
  ThemeConfig,
  Thead,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  styles: {
    global: {
      Body: {
        background: "#EF4723",
        color: "#FFFFFF",
      },
    },

    components: {
      Heading: {
        fontSize: {
          base: "24px",
        },
      },

      Table: {
        color: "Black",
      },
    },
  },
});

export default theme;
