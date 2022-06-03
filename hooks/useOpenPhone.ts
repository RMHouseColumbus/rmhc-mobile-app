import * as Linking from "expo-linking";

interface OpenPhoneParams {
  number: string | number;
}

export interface OpenPhone {
  openPhone: () => Promise<any>;
}
export default function useCallNumber({
  number,
}: OpenPhoneParams): NonNullable<OpenPhone> {
  const phoneNumber = `tel:${number}`;

  return {
    openPhone: () => {
      return Linking.canOpenURL(phoneNumber)
        .then((supported) => {
          if (!supported) {
            console.log("Phone number is not available");
          } else {
            return Linking.openURL(phoneNumber);
          }
        })
        .catch((err) => console.log(err));
    },
  };
}
