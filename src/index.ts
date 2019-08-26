import { getResQuery } from "./res_query";
import { getWinSize } from "./size_change_subscriber";

export { sizeChangeSubscriber } from "./size_change_subscriber";
export { ScreenSizes } from "./screen_sizes";
export { ScreenTypes } from "./screen_types";

export default getResQuery(getWinSize);