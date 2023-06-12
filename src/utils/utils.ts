export function plural(value: number, variants: Record<string, string>, locale: string = 'ru-RU') {
    if (!Number.isInteger(value)) {
        throw new Error('Value must be an integer');
    }
    const pluralRules = new Intl.PluralRules(locale);
    const key = pluralRules.select(value);
    if (!variants.hasOwnProperty(key)) {
        throw new Error(`No variant found for plural form '${key}'`);
    }
    return variants[key];
}