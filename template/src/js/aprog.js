import "../css/index.css";
import {router} from "aprog";
import {routes} from "@/js/config/routes.js";
import {loadTranslations} from "@/js/helpers/translator.js";
import {getAppName} from "@/js/helpers/helper.js";

document.addEventListener("DOMContentLoaded", async () => {
    // lang
    const lang = document.querySelector("html").getAttribute("lang");
    await loadTranslations(lang);

    // title
    const title = document.querySelector("title");
    title.text = getAppName();

    // aprog
    const main = document.getElementById("aprog");
    await router({routes, main});
});
