import {AsyncStorage} from 'react-native';

export class Storage {
  public static async loadString(key: string): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(key);
    } catch {
      // not sure why this would fail... even reading the RN docs I'm unclear
      return null;
    }
  }

  public static async saveString(key: string, value: string): Promise<boolean> {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  }

  public static async get(key: string): Promise<any | null> {
    try {
      const almostThere = await AsyncStorage.getItem(key);
      return JSON.parse(almostThere);
    } catch {
      return null;
    }
  }

  public static async save(key: string, value: any): Promise<boolean> {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }

  public static async remove(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch {}
  }

  public static async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch {}
  }
}
