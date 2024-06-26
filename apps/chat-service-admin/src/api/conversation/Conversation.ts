import { Message } from "../message/Message";
import { Participant } from "../participant/Participant";

export type Conversation = {
  createdAt: Date;
  id: string;
  messages?: Array<Message>;
  participants?: Array<Participant>;
  title: string | null;
  updatedAt: Date;
};
