"use strict";

/* ==========================================
   Language
========================================== */

let currentLanguage = localStorage.getItem("language") || "en";

/* ==========================================
   Initialize
========================================== */

function initLanguage() {

    setLanguage(currentLanguage);

    initLanguageSwitcher();

}

/* ==========================================
   Language Switcher
========================================== */

function initLanguageSwitcher() {

    const buttons = document.querySelectorAll("[data-language]");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const language = button.dataset.language;

            setLanguage(language);

        });

    });

}

/* ==========================================
   Set Language
========================================== */

function setLanguage(language) {

    currentLanguage = language;

    localStorage.setItem("language", language);

    document.documentElement.lang = language;

    updateTranslations();

    updateLanguageButton();

}

/* ==========================================
   Update Translation
========================================== */

function updateTranslations() {

    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {

        const key = element.dataset.i18n;

        const value = getTranslation(key);

        if (value) {

            element.textContent = value;

        }

    });

}

/* ==========================================
   Get Translation
========================================== */

function getTranslation(key) {

    return key.split(".").reduce(

        (object, property) => object?.[property],

        window.translations[currentLanguage]

    );

}

/* ==========================================
   Current Language
========================================== */

function updateLanguageButton() {

    const current = document.querySelector(".language-current");

    if (!current) {

        return;

    }

    current.textContent = currentLanguage.toUpperCase();

}