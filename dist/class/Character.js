import { getDiceRollArray, getDicePlaceholderHtml, getPercentage, } from "../hellpers/utils.js";
class Character {
    constructor(data) {
        (this.name = data.name),
            (this.avatar = data.avatar),
            (this.health = data.health),
            (this.diceCount = data.diceCount),
            (this.currentDiceScore = data.currentDiceScore),
            (this.maxHealth = data.maxHealth),
            (this.diceHtml = getDicePlaceholderHtml(this.diceCount));
    }
    setDiceHtml() {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        this.diceHtml = this.currentDiceScore
            .map(num => `<div class="dice">${num}</div>`)
            .join("");
    }
    takeDamage(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num);
        this.health -= totalAttackScore;
        if (this.health <= 0) {
            this.dead = true;
            this.health = 0;
        }
    }
    getHealthBarHtml() {
        const percent = getPercentage(this.health, this.maxHealth);
        return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                            style="width:${percent}%;">
                    </div>
                </div>`;
    }
    getCharacterHtml() {
        const { name, avatar, health, diceHtml } = this;
        const healthBar = this.getHealthBarHtml();
        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                ${healthBar}
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>`;
    }
}
export default Character;
