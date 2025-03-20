import {div, isObject, isArray, isEmpty, GUID} from "aprog";
import {errors} from "@/js/helpers/notify.js";
import {translate} from "@/js/helpers/translator.js";
import {svg} from "@/js/svg/svg.js";
import {getVersion} from "@/js/helpers/helper.js";

const show = async ({ html = null, isClass = "", closed = true, styles = {} }) => {
    try {
        const modals = document.querySelectorAll(".modal");
        const guid = GUID();
        const body = document.querySelector('body');

        const close = div({
            class: `close ${closed ? "" : "hidden"}`,
            value: svg({stroke: "#ffffff"}).close
        });
        const modal = div({
            id: guid,
            class: `modal ${isClass}`,
            style: {
                ...styles,
                transition: "all 350ms ease-in-out",
                opacity: "0",
                zIndex: modals.length + 1
            }
        });
        const background = div({
            dataModalId: guid,
            class: "background-modal",
            style: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                backgroundColor: "rgba(4, 52, 88, 0.3)",
                backdropFilter: "blur(4px)",
                zIndex: modals.length
            }
        });
        background.addEventListener("click", () => eventClose(body, modal, background));
        const eventClose = (body, modal, background) => {
            body.removeChild(modal);
            body.removeChild(background);
            const isModal = document.querySelectorAll(".modal");
            if (isEmpty(isModal)) {
                body.style.overflow = null;
            }
        };
        setTimeout(async () => {
            modal.style.opacity = "1";
        }, 50);
        modal.append(div({
            style: {
                position: "absolute",
                top: "4px",
                right: "8px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "10px",
                letterSpacing: "1px",
                color: styles.color || "#043458"
            },
            value: `${svg({ w: 16, h: 16, fill: "none"}).version} modal ${getVersion()}`
        }));
        if (html) {
            if (isObject(html)) {
                Object.entries(html).forEach((element) => {
                    modal.appendChild(element);
                });
            } else if (isArray(html)) {
                html.forEach((element) => {
                    modal.appendChild(element);
                })
            } else {
                modal.appendChild(html);
            }
        }
        modal.appendChild(close);
        body.appendChild(background);
        body.appendChild(modal);
        body.style.overflow = "hidden";
        close.addEventListener('click', () => eventClose(body, modal, background));
    } catch (error) {
        errors(translate("error_create_modal", { error: error }));
    }
};

export const modal = (props = {
    html: null,
    isClass: "",
    closed: true,
    styles: {}
}) => show(props).then();

export const closeAllModals = () => {
    const modals = document.querySelectorAll(".modal");
    const backgrounds = document.querySelectorAll(".background-modal");
    modals.forEach(item => item.remove());
    backgrounds.forEach(item => item.remove());
    const body = document.querySelector('body');
    body.style.overflow = null;
};

export const closeThisModal = (target) => {
    const modal = target.closest('.modal');
    const background = document.querySelector(`[data-modal-id="${modal.id}"]`);
    modal.remove();
    if (background) {
        background.remove();
    }
    const isModal = document.querySelectorAll(".modal");
    if (isEmpty(isModal)) {
        const body = document.querySelector('body');
        body.style.overflow = null;
    }
};
