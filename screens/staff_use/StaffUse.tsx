import {
  Box,
  Button,
  FormControl,
  Input,
  ScrollView,
  Text,
  WarningOutlineIcon,
} from "native-base";
import React, { useEffect, useState } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import { environment } from "../../environment";
import { read, save } from "../../storage/Storage";

import StaffCalendar from "./staff_calendar/StaffCalendar";

interface PassProps {
  valid: boolean;
  value: string;
  onChangeText: (s: string) => void;
  onUnlock: () => void;
}

const PasswordInput = ({ valid, value, onChangeText, onUnlock }: PassProps) => {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <ScrollView
      flex={1}
      backgroundColor={Colors.background}
      contentContainerStyle={{ padding: 16, paddingBottom: tabBarHeight + 16 }}
      automaticallyAdjustKeyboardInsets
      keyboardShouldPersistTaps="handled"
    >
      <Box width="100%" maxWidth={400} alignSelf="center">
        <FormControl isInvalid={!valid}>
          <FormControl.Label _text={{ fontFamily: Fonts.Bold, fontSize: 18, color: Colors.text }}>
            Password
          </FormControl.Label>
          <Input
            accessibilityLabel="Password"
            placeholder="Enter password"
            placeholderTextColor={Colors.textMuted}
            fontFamily={Fonts.Regular}
            fontSize={16}
            color={Colors.text}
            backgroundColor={Colors.cardBackground}
            borderColor={Colors.textMuted}
            borderRadius={10}
            minHeight={48}
            _focus={{ borderColor: Colors.action, backgroundColor: Colors.cardBackground }}
            _invalid={{ borderColor: Colors.action }}
            selectionColor={Colors.action}
            autoCapitalize="none"
            autoCorrect={false}
            value={value}
            onChangeText={onChangeText}
            type={"password"}
          />
          <FormControl.ErrorMessage
            _text={{ fontFamily: Fonts.Regular, fontSize: 14, color: Colors.action }}
            leftIcon={<WarningOutlineIcon size="xs" color={Colors.action} />}
          >
            Incorrect Password.
          </FormControl.ErrorMessage>
        </FormControl>
        <Button
          backgroundColor={Colors.action}
          _pressed={{ backgroundColor: Colors.action, opacity: 0.8 }}
          _disabled={{ backgroundColor: Colors.gray, opacity: 1 }}
          borderRadius={10}
          minHeight={48}
          mt={5}
          onPress={onUnlock}
          isDisabled={value.length <= 0}
        >
          <Text fontFamily={Fonts.Bold} fontSize={16} color={Colors.onAction}>
            Unlock
          </Text>
        </Button>
      </Box>
    </ScrollView>
  );
};

export default function StaffUse() {
  const [locked, setLocked] = useState(true);
  const [valid, setValid] = useState(true);
  const [value, setValue] = useState("");
  const handleChange = (text: string) => setValue(text);

  const checkStorage = async () => {
    console.log("Checking for prev password use");
    const existing = await read<string>("staff_password");
    if (existing && existing === environment.STAFF_PASSWORD) {
      console.log("Password correct");
      setValid(true);
      setLocked(false);
    }
  };

  const savePassword = async (pw: string) => {
    console.log("Saving password for later use");
    return await save("staff_password", pw);
  };

  useEffect(() => {
    checkStorage();
  }, []);

  const validate = () => {
    if (value === environment.STAFF_PASSWORD) {
      setValid(true);
      setLocked(false);
      savePassword(value);
    } else {
      setValid(false);
      setLocked(true);
    }
  };

  return locked ? (
    <PasswordInput
      onChangeText={handleChange}
      value={value}
      valid={valid}
      onUnlock={validate}
    />
  ) : (
    <StaffCalendar />
  );
}
