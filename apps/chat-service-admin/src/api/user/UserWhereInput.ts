import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { ParticipantListRelationFilter } from "../participant/ParticipantListRelationFilter";
import { ProfileListRelationFilter } from "../profile/ProfileListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  messages?: MessageListRelationFilter;
  participants?: ParticipantListRelationFilter;
  profiles?: ProfileListRelationFilter;
  username?: StringFilter;
};
