import {div, span, isObject} from "aprog";
import {svg} from "@/js/svg/svg.js";

let counterNotify = 1;

const notify = async (data = {}) => {
    const notifies = document.querySelectorAll(".notify");
    const top = 20;
    let message = "";
    let type = "success";
    let timing = 3500;
    let theme;
    let icon;
    if (!isObject(data)) {
        message = data;
    } else {
        Object.entries(data).forEach(([key, value]) => {
            if (key === "message") {
                message = value;
            } else if (key === "type") {
                type = value;
            } else if (key === "timing") {
                timing = value;
            }
        });
    }
    switch (type) {
        case "warning":
        case 2:
            theme = "bg-orange";
            icon = svg({stroke: "#ffffff"}).warning;
            break;
        case "danger":
        case 0:
            theme = "bg-red";
            icon = svg({stroke: "#ffffff"}).close;
            break;
        case "success":
        case 1:
            theme = "bg-green";
            icon = svg({stroke: "#ffffff"}).check;
            break;
    }
    const body = document.querySelector("body");
    body.appendChild(div({
        id: `notify-${counterNotify}`,
        class: "notify",
        style: {
            top: `${notifies.length > 0 ? top + (50 * notifies.length) : top}px`,
        },
        value: [
            icon,
            span({id: "notify-text", value: message})
        ]
    }))
    const count = counterNotify;
    setTimeout(() => {
        const notify = document.getElementById(`notify-${count}`);
        notify.classList.add(theme);
        notify.style.right = "20px";
        setTimeout(() => {
            notify.style.right = "-550px";
            setTimeout(() => {
                notify.remove();
                document.querySelectorAll(".notify").forEach(el => {
                    const elTop = el.style.top;
                    el.style.top = `${parseInt(elTop) - 50}px`
                })
            }, 700);
        }, timing);
    }, 10);
    counterNotify++;
};

export const success = (message, timing = 3500) => {
    notify({
        message: message,
        timing: timing
    }).then();
};

export const warning = (message, timing = 3500) => {
    notify({
        message: message,
        type: "warning",
        timing: timing
    }).then();
    console.warn(`Warning: ${message}`);
};

export const errors = (message, timing = 5000) => {
    notify({
        message: message,
        type: "danger",
        timing: timing
    }).then();
    console.error("❌ " + message);
};
