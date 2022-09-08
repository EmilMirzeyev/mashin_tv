import { useRouter } from "next/router";
import { ELang } from "../enums/e_lang";
import az from "../locales/az.json"
import ru from "../locales/ru.json"

const t = (key: keyof typeof az) => {
  const router = useRouter();
  const checkLangWord = (word: string) => word || az[key];
  const languages: Record<string, () => string> = {
    [ELang.AZ]() {
      return az[key];
    },
    [ELang.RU]() {
      return checkLangWord((ru as typeof az)[key]);
    },
  };

  if (router.locale) {
    const handler = languages[router.locale] || languages[ELang.AZ];
    return handler();
  }

  return languages[ELang.AZ]();
};

export default t;
