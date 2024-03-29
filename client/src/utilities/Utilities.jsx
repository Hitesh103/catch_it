import { v4 as uuidv4 } from "uuid";

class Utilities {
  static getUniqueID() {
    // use server side generated room ID
    return uuidv4();
  }

  static parseJSON(message) {
    try {
      return JSON.parse(message.body);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return null;
    }
  }
}

export default Utilities;
