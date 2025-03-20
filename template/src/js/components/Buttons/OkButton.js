import {span} from "aprog";
import {closeThisModal} from "../../helpers/modal.js";
import {translate} from "../../helpers/translator.js";

export const OkButton = () => {
    return span({
        class: "btn",
        onClick: (event) => closeThisModal(event.target),
        value: translate("ok")
    })
};
