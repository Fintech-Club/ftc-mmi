export enum STATUS {
  EXTREME_FEAR,
  FEAR,
  GREED,
  EXTREME_GREED,
  NEUTRAL,
}

export enum STATUS_REACTION {
  EXTREME_FEAR = "😱",
  FEAR = "😨",
  GREED = "😬",
  EXTREME_GREED = "😈",
  NEUTRAL = "😐",
}

// create a function that takes as string (the above strings enums ) and returns the corresponding emoji using a switch statement without using any of the aboves enums
export function getReaction(status: string): string {
  switch (status) {
    case "EXTREME_FEAR":
      return "😱";
    case "FEAR":
      return "😨";
    case "GREED":
      return "😬";
    case "EXTREME_GREED":
      return "😈";
    case "NEUTRAL":
      return "😐";
    default:
      return "😐";
  }
}

export type MMI = {
  status: STATUS;
  source: string;
  score: number;
  $updatedAt: string;
};
