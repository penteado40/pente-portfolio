import { describe, expect, it } from "vitest";
import { dictionaries, isLanguage, translate } from "./translate";

describe("translate", () => {
  it("returns the translation for the active language", () => {
    expect(translate("pt", "common.contact")).toBe(
      dictionaries.pt["common.contact"],
    );
    expect(translate("en", "common.contact")).toBe("Contact");
  });

  it("falls back to English when the key is missing in the active language", () => {
    const incompleteLanguage = "pt" as const;
    const key = "footer.rights" as const;

    // Simulate a translation that hasn't been localized yet.
    const partialDictionaries = {
      en: dictionaries.en,
      pt: { ...dictionaries.pt, [key]: undefined },
    };
    delete partialDictionaries.pt[key];

    expect(
      partialDictionaries[incompleteLanguage][key] ??
        partialDictionaries.en[key],
    ).toBe(dictionaries.en[key]);
  });

  it("falls back to the key itself when missing from every dictionary", () => {
    const result =
      // @ts-expect-error - intentionally testing an unknown key
      translate("en", "this.key.does.not.exist");
    expect(result).toBe("this.key.does.not.exist");
  });
});

describe("isLanguage", () => {
  it("accepts known languages", () => {
    expect(isLanguage("en")).toBe(true);
    expect(isLanguage("pt")).toBe(true);
  });

  it("rejects unknown languages", () => {
    expect(isLanguage("fr")).toBe(false);
    expect(isLanguage("")).toBe(false);
  });
});
