import {div, button} from "aprog";
import {translate} from "@/js/helpers/translator.js";
import {Modal} from "@/js/components/Modal/Modal.js";
import {OkButton} from "@/js/components/Buttons/OkButton.js";

export const Home = () => {
    return div({
        class: "w-screen p-5 text-base",
        value: button({
            style: {
                minWidth: "150px",
                height: "40px",
                border: "#043458",
                borderRadius: "8px"
            },
            onClick: () => Modal({
                title: translate("modal_title"),
                body: translate("hello_world"),
                btns: OkButton()
            }),
            value: translate("click_me")
        })
    });
};
