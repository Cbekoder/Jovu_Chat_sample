import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantUpdateInput = {
  conversation?: ConversationWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
