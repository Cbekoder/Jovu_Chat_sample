import { SortOrder } from "../../util/SortOrder";

export type ParticipantOrderByInput = {
  conversationId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
