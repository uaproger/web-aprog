import {div, span} from "aprog";
import {closeThisModal} from "../../helpers/modal.js";
import {translate} from "../../helpers/translator.js";

export const QuestionButtons = ({ callback, close = true }) => {
    return div({
        class: "w-full flex items-center gap-5",
        value: [
            span({
                class: "btn",
                onClick: (event) => {
                    callback(event.target);
                    if (close) {
                        closeThisModal(event.target);
                    }
                },
                value: translate("yes")
            }),
            span({
                class: "btn",
                onClick: (event) => closeThisModal(event.target),
                value: translate("no")
            }),
        ]
    })
};
