import {div} from "aprog";
import {modal} from "@/js/helpers/modal.js";

export const Modal = ({
    title = div({}),
    body = div({}),
    btns = div({}),
    className = "",
    styles = {}
}) => {
    return modal({
        html: div({
            class: "block-modal",
            value: [
                div({
                    class: "title-modal",
                    value: title
                }),
                body,
                div({
                    class: "block-btns-modal",
                    value: btns
                })
            ]
        }),
        isClass: className,
        styles: styles
    });
};
