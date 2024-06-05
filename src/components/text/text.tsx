import React from "react";

import { BaseComponent } from "@src/theme/base-component";
import { StyleSheet } from "@src/theme/style-sheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/theme-provider";

interface TextProps {
  tag?: "p" | "li" | "h1" | "h2" | "h2" | string;
  variant?: ThemeTypographyVariants;
  styleSheet?: StyleSheet;
  children?: React.ReactNode;
  ref: any;
}

const Text = React.forwardRef(
  ({ tag, styleSheet, variant, ...props }: TextProps, ref) => {
    const theme = useTheme();
    const textVariant = theme.typography.variants[variant];

    return (
      <BaseComponent
        as={tag}
        styleSheet={{
          fontFamily: theme.typography.fontFamily,
          ...textVariant,
          ...styleSheet,
        }}
        ref={ref}
        {...props}
      />
    );
  }
);

Text.defaultProps = {
  tag: "p",
  variant: "body2",
};

export default Text;
