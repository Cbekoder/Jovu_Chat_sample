import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantCreateInput = {
  conversation?: ConversationWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
