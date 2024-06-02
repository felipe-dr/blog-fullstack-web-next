import Box from "@src/components/box/box";
import Text from "@src/components/text/text";
import theme from "@src/theme/theme";

import Background from "./patterns/background/background";
import Feed from "./patterns/feed/feed";
import Footer from "./patterns/footer/footer";
import Menu from "./patterns/menu/menu";

export default function HomeScreen() {
  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.positive.x100,
        flex: 1,
        alignItems: "center",
      }}
    >
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Text tag="h2" variant="heading1">
          Últimas Atualizações
        </Text>
        <Feed.Posts />
      </Feed>
      <Footer />
    </Box>
  );
}
