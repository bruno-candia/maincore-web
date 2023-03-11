import { SetStateAction } from "react";

export interface TranslateProps {
  textTranslated?: (key: string) => string;
  setLanguage?: ((value: SetStateAction<string>) => void) | undefined;
  language?: string | undefined;
}
