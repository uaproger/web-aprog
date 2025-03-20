// Об'єкт для зберігання завантажених перекладів
const translations = {};
let translationsLoaded = false;

/**
 * Завантаження перекладів із файлів у каталозі ./resources/lang/.
 * @param {string} language - Код мови (наприклад, "uk", "en", "ru").
 */
export const loadTranslations = async (language = "uk") => {
    try {
        const translationsModule = await import(`../../lang/${language}.json`);
        Object.assign(translations, translationsModule);
        translationsLoaded = true;
    } catch (error) {
        console.error(`Помилка завантаження перекладів для мови "${language}":`, error);
    }
};

/**
 * Отримання перекладу за ключем.
 * @param {string} key - Ключ перекладу.
 * @param {object} values - Об'єкт для підстановки значень у рядок перекладу.
 * @returns {string} - Перекладений рядок.
 */
export const translate = (key, values = {}) => {
    if (!translationsLoaded) {
        console.warn(`Переклади ще не завантажені. Ключ: "${key}"`);
        return key;
    }
    let translation = translations[key] || key;
    // Замінити підстановки {key} у перекладі
    for (const [placeholder, value] of Object.entries(values)) {
        translation = translation.replace(`:${placeholder}`, value);
    }
    return translation;
};

/**
 * Використання функції translate з очікуванням завантаження.
 * @param {string} key - Ключ перекладу.
 * @param {object} values - Об'єкт для підстановки значень у рядок перекладу.
 * @returns {Promise<string>} - Перекладений рядок.
 */
export const safeTranslate = async (key, values = {}) => {
    if (!translationsLoaded) {
        console.warn("Переклади ще не завантажені. Очікуємо...");
        await new Promise((resolve) => {
            const interval = setInterval(() => {
                if (translationsLoaded) {
                    clearInterval(interval);
                    resolve();
                }
            }, 50);
        });
    }
    return translate(key, values);
};
