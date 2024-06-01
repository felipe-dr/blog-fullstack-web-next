import { BaseComponent } from "@src/theme/base-component";
import { StyleSheet } from "@src/theme/style-sheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/theme-provider";

interface TextProps {
  tag?: "p" | "li" | "h1" | "h2" | "h3";
  variant?: ThemeTypographyVariants;
  styleSheet?: StyleSheet;
  children?: React.ReactNode;
}
export default function Text({ styleSheet, variant, ...props }: TextProps) {
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant];

  return (
    <BaseComponent
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet,
      }}
      {...props}
    />
  );
}

Text.defaultProps = {
  tag: "p",
  variant: "body2",
};
