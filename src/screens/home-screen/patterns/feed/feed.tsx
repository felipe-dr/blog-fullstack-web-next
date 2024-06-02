import Box from "@src/components/box/box";
import Icon from "@src/components/icon/icon";
import Image from "@src/components/image/image";
import Text from "@src/components/text/text";

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  return (
    <Box>
      <Text>Feed Base</Text>
      {children}
    </Box>
  );
}

Feed.Header = () => {
  return (
    <Box styleSheet={{ color: "white" }}>
      <Image
        styleSheet={{
          width: "128px",
          height: "128px",
          borderRadius: "100%",
        }}
        src="https://github.com/omariosouto.png"
        alt="Imagem de perfil do Mario Souto"
      />
      <Icon name="youtube" />
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
