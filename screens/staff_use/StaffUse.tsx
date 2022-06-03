import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  WarningOutlineIcon,
} from "native-base";
import React, { useEffect, useState } from "react";

import Colors from "../../constants/Colors";
import { environment } from "../../environment";
import { read, save } from "../../storage/Storage";

import StaffCalendar from "./staff_calendar/StaffCalendar";

interface PassProps {
  valid: boolean;
  value: string;
  onChangeText: (s: string) => void;
  onUnlock: () => void;
}

const PasswordInput = ({ valid, value, onChangeText, onUnlock }: PassProps) => (
  <Box flex={1} py={"4"} px={"4"} backgroundColor={Colors.white}>
    <Box alignItems="center">
      <FormControl isInvalid={!valid} w="75%" maxW="300px">
        <FormControl.Label>Password</FormControl.Label>
        <Input
          placeholder="Enter password"
          value={value}
          onChangeText={onChangeText}
          type={"password"}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Incorrect Password.
        </FormControl.ErrorMessage>
      </FormControl>
      <Button
        backgroundColor={value.length > 0 ? Colors.buttonBlue : Colors.gray}
        borderRadius={10}
        width={"75%"}
        mt={5}
        onPress={onUnlock}
        disabled={value.length <= 0}
      >
        <Text fontFamily={"Raleway-SemiBold"} color={"white"}>
          Unlock
        </Text>
      </Button>
    </Box>
  </Box>
);

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
