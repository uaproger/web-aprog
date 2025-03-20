import {span} from "aprog";
import {closeThisModal} from "../../helpers/modal.js";
import {translate} from "../../helpers/translator.js";

export const OkButton = ({ className= "", style = {} } = {}) => {
    return span({
        class: `btn ${className}`,
        style: style,
        onClick: (event) => closeThisModal(event.target),
        value: translate("ok")
    })
};
