import { Conversation } from "../conversation/Conversation";
import { User } from "../user/User";

export type Message = {
  content: string | null;
  conversation?: Conversation | null;
  createdAt: Date;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
