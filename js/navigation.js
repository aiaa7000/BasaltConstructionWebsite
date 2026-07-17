"use strict";

/* ==========================================
   Navigation
========================================== */

function initNavigation() {
    initStickyHeader();
    initDropdown(".language-switcher");
}

/* ==========================================
   Sticky Header
========================================== */

function initStickyHeader() {

    const header = document.querySelector(".header");

    if (!header) return;

    const updateHeader = () => {
        header.classList.toggle(
            "is-scrolled",
            window.scrollY > 24
        );
    };

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

}

/* ==========================================
   Dropdown
========================================== */

function initDropdown(selector) {

    const dropdown = document.querySelector(selector);

    if (!dropdown) return;

    const button =
    dropdown.querySelector(".dropdown-trigger");

    const menu =
        dropdown.querySelector(".dropdown-menu");

    if (!button || !menu) return;

    function closeDropdown() {

        dropdown.classList.remove("is-open");

        button.setAttribute(
            "aria-expanded",
            "false"
        );

    }

    function openDropdown() {

        dropdown.classList.add("is-open");

        button.setAttribute(
            "aria-expanded",
            "true"
        );

    }

    button.addEventListener("click", (event) => {

        event.stopPropagation();

        const isOpen =
            dropdown.classList.contains("is-open");

        if (isOpen) {

            closeDropdown();

        } else {

            openDropdown();

        }

    });

    document.addEventListener("click", (event) => {

        if (!dropdown.contains(event.target)) {

            closeDropdown();

        }

    });

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeDropdown();

        }

    });

    menu.addEventListener("click", () => {

        closeDropdown();

    });

}
