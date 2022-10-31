import { RULES, PLAYERS } from "@/constants";

export const useVerifyWinner = (userPicked, computerPicked) => {
  switch (userPicked) {
    case RULES.paper:
      if (computerPicked === RULES.scissors) return PLAYERS.computer;
      if (computerPicked === RULES.rock) return PLAYERS.user;
      return "tie";
    case RULES.scissors:
      if (computerPicked === RULES.rock) return PLAYERS.computer;
      if (computerPicked === RULES.paper) return PLAYERS.user;
      return "tie";
    case RULES.rock:
      if (computerPicked === RULES.paper) return PLAYERS.computer;
      if (computerPicked === RULES.scissors) return PLAYERS.user;
      return "tie";
  }
};
