import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
} from "react-native";

export const Button = ({
  text,
  onPress,
  icon,
  backgroundColor,
  textColor = "white",
  style,
  outlineColor,
  textStyle,
  textProps,
  loading,
  disabled,
  fontWeight = "600",
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={[
        styles.button,
        {
          backgroundColor: disabled ? "gray" : backgroundColor,
          borderColor: outlineColor,
          borderWidth: outlineColor ? 1 : 0,
        },
        style,
      ]}
      disabled={disabled}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" animating color={textColor} />
      ) : (
        <View style={styles.innerCtn}>
          <View>{icon}</View>
          <Text
            fontWeight={fontWeight}
            style={[
              styles.buttonText,
              {
                color: disabled ? "white" : textColor,
                fontWeight,
              },
              textStyle,
            ]}
            {...textProps}
          >
            {text}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingHorizontal: 48,
    height: 52,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 14,
  },
  innerCtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
});

// interface RadioProps {
//   checked: boolean | undefined;
//   color?: string;
//   onChange: () => void;
// }
// export const Radio = ({ checked, onChange, color = pallets.primaryBlue }) => {
//   return (
//     <TouchableOpacity
//       style={{
//         alignItems: "center",
//         borderColor: checked ? color : pallets.border,
//         borderRadius: 8,
//         borderWidth: 1,
//         height: 16,
//         justifyContent: "center",
//         width: 16,
//       }}
//       onPress={onChange}
//     >
//       {checked && (
//         <View
//           style={{
//             backgroundColor: color,
//             borderRadius: 4,
//             height: 8,
//             width: 8,
//           }}
//         />
//       )}
//     </TouchableOpacity>
//   );
// };
// const shadowColor = "#00000055";
// interface FABProps {
//   backgroundColor?: string;
//   children?: JSX.Element;
//   disabled?: boolean;
//   onPress?: () => void;
//   style?: object;
// }

// export const FAB = ({
//   onPress = () => null,
//   style = {},
//   disabled = false,
//   backgroundColor = pallets.primaryBlue,
//   children,
//   ...props
// }) => {
//   return (
//     <TouchableOpacity
//       style={{
//         alignItems: "center",
//         backgroundColor,
//         borderRadius: 50,
//         bottom: 20,
//         elevation: 2,
//         height: 55,
//         justifyContent: "center",
//         position: "absolute",
//         right: 20,
//         shadowColor: shadowColor,
//         shadowOffset: { height: 1, width: 0 },
//         shadowOpacity: 0.3,
//         shadowRadius: 5,
//         width: 55,
//         ...style,
//       }}
//       onPress={onPress}
//       disabled={disabled}
//       activeOpacity={0.6}
//       {...props}
//     >
//       {children}
//     </TouchableOpacity>
//   );
// };
