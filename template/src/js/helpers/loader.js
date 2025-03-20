import {div, isEmpty, GUID} from "aprog";
import {svg} from "@/js/svg/svg.js";

export const loader = {
    add({ target = "", replaceContent = false } = {}) {
        try {
            const svgID = GUID();
            const svgElement = svg({
                id: svgID,
                classes: "loader",
                w: 100,
                h: 100
            }).loader;
            const back = div({
                id: "back-loader-block",
                dataId: svgID,
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(4, 52, 88, 0.39)",
                    backdropFilter: "blur(4px)",
                    "-webkit-backdrop-filter": "blur(4px)",
                    zIndex: 2147483646
                }
            });
            back.innerHTML = svgElement;
            const element = !isEmpty(target) ? svgElement : back;
            const targetBlock = !isEmpty(target)
                ? document.querySelector(target)
                : document.querySelector('#main');

            if (replaceContent) {
                targetBlock.innerHTML = '';
            }
            !isEmpty(target) ? targetBlock.innerHTML = element : targetBlock.appendChild(element);
        } catch (error) {
            console.error('Помилка при додаванні SVG:', error);
        }
    },

    remove() {
        const loaderElement = document.querySelector(".loader");
        if (loaderElement) {
            loaderElement.remove();
            const back = document.querySelector(`[data-id="${loaderElement.id}"]`);
            if (back) {
                back.remove();
            }
        } else {
            console.warn('SVG не знайдено для видалення');
        }
    }
};
