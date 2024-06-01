import Box from "@src/components/box/box";
import Text from "@src/components/text/text";

import Background from "./patterns/background/background";
import Feed from "./patterns/feed/feed";
import Menu from "./patterns/menu/menu";
import Footer from "./patterns/footer/footer";

export default function HomeScreen() {
  return (
    <Box
      tag="main"
      styleSheet={{ backgroundColor: "grey", flex: 1, alignItems: "center" }}
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
