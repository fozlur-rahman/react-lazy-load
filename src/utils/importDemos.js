import { lazy } from "react";

const importDemos = (file) => {
    return lazy(() => import(`../components/${file}`));
};
export default importDemos;
