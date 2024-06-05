import React from "react";

import Box from "@src/components/box/box";
import Button from "@src/components/button/button";
import Icon from "@src/components/icon/icon";
import Image from "@src/components/image/image";
import Link from "@src/components/link/link";
import Text from "@src/components/text/text";

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }) {
  return (
    <Box>
      <Text>Feed Base</Text>
      {children}
    </Box>
  );
}

Feed.Header = () => {
  return (
    <Box>
      <Button>Olá pessoas!</Button>
      <Button.Base href="https://github.com/omariosouto">
        <Image
          styleSheet={{
            width: "128px",
            height: "128px",
            borderRadius: "100%",
          }}
          src="https://github.com/omariosouto.png"
          alt="Imagem de perfil do Mario Souto"
        />
      </Button.Base>
      <Link href="https://youtube.com/DevSoutinho">
        <Icon name="youtube" />
      </Link>
      <Icon name="twitter" />
      <Icon name="instagram" />
      <Icon name="github" />
      <Text>Feed Header</Text>
    </Box>
  );
};

Feed.Posts = () => {
  return (
    <Box>
      <Text>Feed Posts</Text>
    </Box>
  );
};
