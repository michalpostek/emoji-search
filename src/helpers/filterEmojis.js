import PropTypes from "prop-types";

import emojiList from "../data/emojiList.json";

export const filterEmojis = keyword => {
    return emojiList.filter(
        emoji => emoji.title.includes(keyword) || emoji.keywords.includes(keyword)
    ).splice(0, 144);
};

filterEmojis.propTypes = {
    keyword: PropTypes.string,
};
