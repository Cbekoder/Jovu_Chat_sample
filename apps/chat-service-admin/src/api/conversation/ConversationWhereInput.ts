import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { ParticipantListRelationFilter } from "../participant/ParticipantListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ConversationWhereInput = {
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  participants?: ParticipantListRelationFilter;
  title?: StringNullableFilter;
};
