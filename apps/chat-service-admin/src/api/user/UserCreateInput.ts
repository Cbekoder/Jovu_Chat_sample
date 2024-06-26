import { MessageCreateNestedManyWithoutUsersInput } from "./MessageCreateNestedManyWithoutUsersInput";
import { ParticipantCreateNestedManyWithoutUsersInput } from "./ParticipantCreateNestedManyWithoutUsersInput";
import { ProfileCreateNestedManyWithoutUsersInput } from "./ProfileCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  messages?: MessageCreateNestedManyWithoutUsersInput;
  participants?: ParticipantCreateNestedManyWithoutUsersInput;
  password: string;
  profiles?: ProfileCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
