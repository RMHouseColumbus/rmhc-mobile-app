import { Linking } from "react-native";

interface OpenEmailParams {
  email: string;
}

export interface OpenEmail {
  openEmail: () => Promise<void>;
}
export default function useOpenEmail({
  email,
}: OpenEmailParams): NonNullable<OpenEmail> {
  const emailUrl = `mailto:${email}`;

  return {
    openEmail: () => {
      return Linking.canOpenURL(emailUrl)
        .then((supported) => {
          if (!supported) {
            console.log("Email is not available");
          } else {
            return Linking.openURL(emailUrl);
          }
        })
        .catch((err) => console.log(err));
    },
  };
}
