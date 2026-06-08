export type Message = {
  type: "human" | "bot";
  text: string;
  isLoading: boolean;
};
