import React, { useState, forwardRef } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

const Input = ({
  RightComponent,
  LeftComponent,
  label,
  error,
  errorMessage,
  coverStyle,
  inputStyle,
  style,
  secureTextEntry,
  editable = true,
  bottomComponent,
  isMultiLine = false,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(!secureTextEntry);

  const toggleSetShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <View style={[styles.container, coverStyle]}>
      {label && <Text style={styles.labelText}>{label}</Text>}
      <View
        style={[
          styles.content,
          !!error && { borderColor: "red" },
          !!LeftComponent && { paddingLeft: 10 },
          (!!RightComponent || secureTextEntry) && { paddingRight: 10 },
          !editable && { backgroundColor: "gray" },
          isMultiLine && { height: 100 },
          style,
        ]}
      >
        {LeftComponent && LeftComponent}
        <TextInput
          style={[
            styles.input,
            inputStyle,
            isMultiLine && styles.multiLineInput,
          ]}
          placeholderTextColor={"gray"}
          secureTextEntry={!showPassword}
          editable={editable}
          multiline={isMultiLine}
          textAlignVertical={isMultiLine ? "top" : "center"}
          {...rest}
        />
        {secureTextEntry ? (
          <TouchableOpacity onPress={toggleSetShowPassword}>
            <Icon
              name={!showPassword ? "visibility" : "visibility-off"}
              size={20}
              color={"black"}
            />
          </TouchableOpacity>
        ) : (
          RightComponent && RightComponent
        )}
      </View>
      {error && (
        <View style={styles.error}>
          <Text style={styles.errorText}>{errorMessage || error}</Text>
        </View>
      )}
      {bottomComponent && (
        <View style={{ marginTop: 8 }}>{bottomComponent}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  labelText: {
    marginBottom: 9,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    borderWidth: 1,
    backgroundColor: "rgba(206, 207, 217, 0.1)",
    borderRadius: 8,
    borderColor: "rgba(136, 145, 139, 0.4)",
  },
  input: {
    fontFamily: "Poppins-Regular",
    color: "#472B97",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  error: {
    width: "95%",
    alignSelf: "center",
    backgroundColor: "red",
    paddingVertical: 7,
    paddingHorizontal: 10,
  },
  errorText: {
    color: "red",
  },
  multiLineInput: {
    height: 100,
    textAlignVertical: "top",
  },
});

export default Input;
