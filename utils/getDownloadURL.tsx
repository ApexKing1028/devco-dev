// utils/getDownloadURL.ts
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

export const getImageURL = async (path: string): Promise<string | null> => {
  const imageRef = ref(storage, path);
  try {
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error("Error getting download URL", error);
    return null;
  }
};