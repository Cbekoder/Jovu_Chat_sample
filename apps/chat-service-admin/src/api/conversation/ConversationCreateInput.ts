import { MessageCreateNestedManyWithoutConversationsInput } from "./MessageCreateNestedManyWithoutConversationsInput";
import { ParticipantCreateNestedManyWithoutConversationsInput } from "./ParticipantCreateNestedManyWithoutConversationsInput";

export type ConversationCreateInput = {
  messages?: MessageCreateNestedManyWithoutConversationsInput;
  participants?: ParticipantCreateNestedManyWithoutConversationsInput;
  title?: string | null;
};
