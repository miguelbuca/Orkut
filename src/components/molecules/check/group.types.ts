export type CheckerType =
  | "Futebol"
  | "Design"
  | "Economia"
  | "Atletismo"
  | "Café"
  | "Pesca";

export type CheckType = {
  name: CheckerType;
  checked: boolean;
  onPress(): void;
};