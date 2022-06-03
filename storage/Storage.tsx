import AsyncStorage from "@react-native-async-storage/async-storage";

const UNSECURE_PREFIX = "RMHCOpen";

export const read = async <T extends unknown>(
  key: string
): Promise<null | T> => {
  try {
    const value: string | null = await AsyncStorage.getItem(
      `${UNSECURE_PREFIX}_${key}`
    );
    if (value) {
      const myJson = JSON.parse(value);
      return myJson as T;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const save: (
  key: string,
  value: unknown
) => Promise<string | null> = async (key: string, value: unknown) => {
  try {
    await AsyncStorage.setItem(
      `${UNSECURE_PREFIX}_${key}`,
      JSON.stringify(value)
    );
    return key;
  } catch (e) {
    return null;
  }
};

export const remove: (key: string) => Promise<boolean> = async (
  key: string
) => {
  try {
    return await AsyncStorage.removeItem(`${UNSECURE_PREFIX}_${key}`)
      .then((_) => true)
      .catch((_) => false);
  } catch (e) {
    console.log(e);
    return Promise.resolve(false);
  }
};
