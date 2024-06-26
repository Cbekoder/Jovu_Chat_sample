import { MessageUpdateManyWithoutConversationsInput } from "./MessageUpdateManyWithoutConversationsInput";
import { ParticipantUpdateManyWithoutConversationsInput } from "./ParticipantUpdateManyWithoutConversationsInput";

export type ConversationUpdateInput = {
  messages?: MessageUpdateManyWithoutConversationsInput;
  participants?: ParticipantUpdateManyWithoutConversationsInput;
  title?: string | null;
};
