function getDiceRollArray(diceCount) {
    const arr = new Array(diceCount).fill(0).map(item => {
        return (item = Math.floor(Math.random() * 6) + 1);
    });
    return arr;
}
function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount)
        .fill(0)
        .map(() => `<div class="placeholder-dice"></div>`)
        .join("");
}
const getPercentage = (remainingHealth, maximumHealth) => (100 * remainingHealth) / maximumHealth;
export { getDiceRollArray, getDicePlaceholderHtml, getPercentage };
