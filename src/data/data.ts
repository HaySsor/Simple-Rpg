import { Mob } from "../types/types";

const characterData: {
	hero: Mob;
	orc: Mob;
	demon: Mob;
	goblin: Mob;
} = {
	hero: {
		name: "Wizard",
		avatar: "images/wizard.png",
		health: 60,
		maxHealth: 60,
		diceCount: 3,
		currentDiceScore: [],
	},
	orc: {
		name: "Orc",
		avatar: "images/orc.png",
		health: 30,
		maxHealth: 30,
		diceCount: 1,
		currentDiceScore: [],
	},
	demon: {
		name: "Demon",
		avatar: "images/demon.png",
		health: 25,
		maxHealth: 25,
		diceCount: 2,
		currentDiceScore: [],
	},
	goblin: {
		name: "Goblin",
		avatar: "images/goblin.png",
		health: 20,
		maxHealth: 25,
		diceCount: 3,
		currentDiceScore: [],
	},
};

export default characterData;
