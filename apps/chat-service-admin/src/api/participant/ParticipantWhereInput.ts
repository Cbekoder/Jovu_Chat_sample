import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantWhereInput = {
  conversation?: ConversationWhereUniqueInput;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
