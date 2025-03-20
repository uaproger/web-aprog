import {router} from "aprog";
import {routes} from "@/js/config/routes.js";
import {project} from "@/js/config/project.js";

document.addEventListener("DOMContentLoaded", async () => {
    const title = document.querySelector("title");
    title.text = project.name;

    const main = document.getElementById("main");
    await router({routes, main});
});
