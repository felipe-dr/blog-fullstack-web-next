import { useTheme } from "@src/theme/theme-provider";

import ButtonBase, { ButtonBaseProps } from "./button-base";
import { ButtonSize, buttonSize } from "./button-size";
import { ColorVariant, colorVariantBy, Variant } from "./color-variant-by";

interface ButtonProps extends ButtonBaseProps {
  fullWidth?: boolean;
  children: React.ReactNode;
  colorVariant?: ColorVariant;
  variant?: Variant;
  size?: ButtonSize;
}

export default function Button({
  styleSheet,
  children,
  fullWidth,
  colorVariant,
  variant,
  size,
}: ButtonProps) {
  const theme = useTheme();

  return (
    <ButtonBase
      styleSheet={{
        alignSelf: "flex-start",
        // [Color + Variant]
        ...colorVariantBy(theme, colorVariant, variant),
        // [Size]
        ...buttonSize[size],
        // [FullWidth]
        ...(fullWidth && {
          alignSelf: "initial",
        }),
        ...styleSheet,
      }}
    >
      {children}
    </ButtonBase>
  );
}

Button.defaultProps = {
  fullWidth: false,
  size: "md",
  variant: "contained",
  colorVariant: "primary",
};

Button.Base = ButtonBase;
