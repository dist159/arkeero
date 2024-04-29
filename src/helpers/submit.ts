import { User } from "@/types/user";
import axios from "axios";

export const submit = async (data: User) => {
  try {
    const res = await axios.post("/api/submit", data, {
      headers: { "Content-Type": "application/json" },
    });

    return res.status;
  } catch (error) {
    console.error("Failed to submit form:", error);
    throw new Error();
  }
};
