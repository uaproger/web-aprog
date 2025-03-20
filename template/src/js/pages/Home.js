import {div, img,  button, pre} from "aprog";
import {translate} from "@/js/helpers/translator.js";
import {Modal} from "@/js/components/Modal/Modal.js";
import {OkButton} from "@/js/components/Buttons/OkButton.js";
import {getVersion} from "@/js/helpers/helper.js";

export const Home = (props = {}) => {
    console.log(props);

    return div({
        class: "w-full h-screen p-2 flex flex-col items-center justify-center gap-5 text-base bg-cloud",
        value: [
            img({
                class: "logo",
                src: "/logo.svg",
                alt: "logo.svg"
            }),
            div({
                class: "text-3xl",
                value: translate("web_aprog")
            }),
            div({
                class: "text-xxs",
                value: translate("version", { version: getVersion() })
            }),
            div({ value: translate("copyright") }),
            button({
                class: "btn text-white bg-default",
                onClick: () => Modal({
                    title: translate("modal_title"),
                    body: div({
                        class: "h-full flex flex-col items-center gap-2",
                        value: [
                            div({
                                class: "text-5xl text-gold",
                                value: "tryzub"
                            }),
                            div({
                                class: "text-3xl",
                                value: translate("thank_you")
                            }),
                            pre({
                                class: "text-center whitespace-pre-wrap",
                                value: translate("about_web_aprog")
                            })
                        ]
                    }),
                    btns: OkButton({
                        className: "text-white bg-default"
                    }),
                    styles: {
                        maxWidth: "80%",
                        maxHeight: "80vh",
                        backgroundColor: "#61b8f8",
                        overflowY: "scroll"
                    }
                }),
                value: translate("click_me")
            })
        ]
    });
};
