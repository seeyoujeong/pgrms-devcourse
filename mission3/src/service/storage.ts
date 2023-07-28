const storage = localStorage;

export const getStorageItem = <T = unknown>(
  key: string,
  defaultValue: T
): T => {
  try {
    const value = storage.getItem(key);

    if (typeof value === "string") {
      return JSON.parse(value);
    }

    return defaultValue;
  } catch (error) {
    console.log(error instanceof Error ? error.message : error);
    return defaultValue;
  }
};

export const setStorageItem = <T = unknown>(key: string, value: T) => {
  storage.setItem(key, JSON.stringify(value));
};
