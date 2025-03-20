import {div, img,  button} from "aprog";
import {translate} from "@/js/helpers/translator.js";
import {Modal} from "@/js/components/Modal/Modal.js";
import {OkButton} from "@/js/components/Buttons/OkButton.js";

export const Home = () => {
    return div({
        class: "w-full h-full p-5 flex flex-col items-center justify-center gap-5 text-base",
        value: [
            img({
                src: "/logo.svg",
                alt: "logo.svg"
            }),
            button({
                class: "btn",
                onClick: () => Modal({
                    title: translate("modal_title"),
                    body: translate("hello_world"),
                    btns: OkButton()
                }),
                value: translate("click_me")
            })
        ]
    });
};
