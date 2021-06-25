import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import ButtonRow from './button-row';
import PropertiesContext from './properties-context';

const statPockets = [
	['+250 muscle substats', '', 161, '/images/itemimages/strboost.gif'],
	['+250 myst substats', '', 37, '/images/itemimages/eyelashes.gif'],
	['+250 moxie substats', '', 277, '/images/itemimages/buttrock.gif'],
];

const fightPockets = [
	['Smut Orc Pervert', '10 bridge parts', 666, '/images/adventureimages/smutorc_pervert.gif'],
	['Modern Zmobie', '-5 Evil (Alcove)', 235, '/images/adventureimages/modernzombie.gif'],
	['Harem Girl', 'YR for outfit', 299, '/images/adventureimages/kg_haremgirl.gif'],
	['Mountain Man', 'YR for 2 of each ore', 565, '/images/adventureimages/mountainman.gif'],
	['Green Ops Soldier', 'Smoke bomb, olfact', 589, '/images/adventureimages/warhipgr.gif'],
	['lobsterfrogman', 'olfact', 220, '/images/adventureimages/lobsterman.gif'],
	['pufferfish', 'Pufferfish Spine', 363, '/images/adventureimages/pufferfish.gif'],
	['War Hippy (space) cadet', 'YR for Hippy Outfit', 443, '/images/adventureimages/warhipb.gif'],
	['War Pledge', 'YR for Frat Outfit', 568, '/images/adventureimages/fratboy.gif'],
];

const camelsToe = ['Camel\'s Toe', '2 stars/lines, olfact', 317, '/images/adventureimages/cameltoe.gif'];
const skinflute = ['Skinflute', '2 stars/lines, olfact', 383, '/images/adventureimages/skinflute.gif'];
const blooper   = ['Blooper', 'White Pixel, olfact', 250, '/images/adventureimages/squid.gif'];

const bellPockets = [
	['Sizzling desk bell', 'YR source', 517, '/images/adventureimages/ccs_daughter.gif'],
	['Uncanny desk bell', '3 eldritch effluvium', 590, '/images/adventureimages/ccs_tentacle.gif'],
	['Nasty desk bell', 'Goat cheese, milk', 653, '/images/adventureimages/ccs_disciple.gif'],
	['Greasy desk bell', 'Star chart, 2 stars/lines', 533, '/images/adventureimages/ccs_astrologer.gif'],
];

const buffPockets = [
	['Filthworm Drone Stench (5)', 'Skip 2 worms', 343, '/images/itemimages/stench.gif'],
	['Alarm clock', 'Tomorrow, +666% stats', 121, '/images/itemimages/yeg_blessing.gif'],
	['Hand soap', '+200% spell dmg', 177, '/images/itemimages/yeg_sigils.gif'],
	['Medieval Mage Mayhem (60)', '+50% weapon/+100% spell dmg', 617, '/images/itemimages/swords.gif'],
	['Barely Visible (20)', '-10% combat', 347, '/images/itemimages/pocket.gif'],
	['Very Attractive (20)', '+10% combat', 53, '/images/itemimages/louder.gif'],
	['Night Vision (50)', '+30% meat', 339, '/images/itemimages/bigeyes.gif'],
	['Finding Stuff (20)', '+30% item', 86, '/images/itemimages/eyes.gif'],
];

const itemPockets = [
	['Tangerine', 'Hawking\'s elixir', 396, '/images/itemimages/tangerine.gif'],
	['Flask of moonshine', '5 adv/liver booze', 324, '/images/itemimages/flask.gif'],
];

const chessPockets = [
	['Onyx pawn', '', 105, '/images/itemimages/chess7.gif'],
	['Onyx knight', '', 4, '/images/itemimages/chess12.gif'],
	['Onyx bishop', '', 537, '/images/itemimages/chess8.gif'],
	['Onyx rook', '', 197, '/images/itemimages/chess9.gif'],
	['Onyx queen', '', 506, '/images/itemimages/chess11.gif'],
	['Onyx king', '', 88, '/images/itemimages/chess10.gif'],
	['Alabaster pawn', '', 46, '/images/itemimages/chess1.gif'],
	['Alabaster knight', '', 275, '/images/itemimages/chess6.gif'],
	['Alabaster bishop', '', 567, '/images/itemimages/chess2.gif'],
	['Alabaster rook', '', 111, '/images/itemimages/chess3.gif'],
	['Alabaster queen', '', 651, '/images/itemimages/chess5.gif'],
	['Alabaster king', '', 523, '/images/itemimages/chess4.gif'],
];

const yegPockets = [
	['Alarm clock', 'Stats potion', 121, '/images/itemimages/yeg_clock.gif'],
	['Ashtray', 'Combat item', 409, '/images/itemimages/yeg_ashtray.gif'],
	['Disposable razor', 'Combat item', 322, '/images/itemimages/yeg_razor.gif'],
	['Hand soap', 'Spell dmg potion', 177, '/images/itemimages/yeg_soap.gif'],
	['Minibar key', 'Random booze', 660, '/images/itemimages/yeg_key.gif'],
	['Mouthwash', 'Spooky potion', 26, '/images/itemimages/yeg_mouthwash.gif'],
	['Pillow mint', 'Food', 439, '/images/itemimages/yeg_mint.gif'],
	['Sewing kit', 'Full HP restore', 642, '/images/itemimages/yeg_sewingkit.gif'],
	['Stationery', 'Hearty messages', 130, '/images/itemimages/yeg_stationery.gif'],
	['Toothbrush', 'Weapon dmg potion', 284, '/images/itemimages/yeg_toothbrush.gif'],
];

const aftercoreItemPockets = [
	['Cursed piece of thirteen', 'Meat or fight scary pirate', 600, '/images/itemimages/pieceof13.gif'],
	['Candy crayons', 'Increased stat from food', 87, '/images/itemimages/candycrayons.gif'],
	['Dubious peppermint', 'Makes numberwang', 627, '/images/itemimages/candy.gif'],
	['Worst candy', '+10% combat', 548, '/images/itemimages/confused.gif'],
	['Handful of honey', 'Makes honey gear', 28, '/images/itemimages/honeyglob.gif'],
	['Chocolate seal-clubbing club', '+adv for Seal Clubbers', 381, '/images/itemimages/choc1.gif'],
	['Chocolate turtle totem', '+adv for Turtle Tamers', 477, '/images/itemimages/choc2.gif'],
	['Chocolate pasta spoon', '+adv for Pastamancers', 654, '/images/itemimages/choc3.gif'],
	['Chocolate saucepan', '+adv for Saucerors', 438, '/images/itemimages/choc4.gif'],
	['Chocolate disco ball', '+adv for Disco Bandits', 430, '/images/itemimages/choc5.gif'],
	['Chocolate stolen accordion', '+adv for Accordion Thieves', 189, '/images/itemimages/choc6.gif'],
	['Handful of Bees', 'Combat item @ 100 dmg/round', 189, '/images/itemimages/bees.gif'],
];

const App = () => {
	let [ashProperties, setAshProperties] = useState(null);
	// eslint-disable-next-line no-undef
	useEffect(() => setAshProperties(globalAshProperties), []);
	if (ashProperties?.inAftercore === "true") {
		const localBellPockets = [...bellPockets,
			['Frost-rimed desk bell', 'Cold wads, nuggets, powder', 587, '/images/adventureimages/ccs_herald.gif'],
		];
		return (
			<div id="preact_root">
				<PropertiesContext.Provider value={ashProperties}>
					<ButtonRow title="Bells" buttons={localBellPockets} />
					<ButtonRow title="Chess Pieces" buttons={chessPockets} />
					<ButtonRow title="Yeg's Stuff" buttons={yegPockets} />
					<ButtonRow title="Other Items" buttons={aftercoreItemPockets} />
				</PropertiesContext.Provider>
			</div>
		);
	} 
	const localItemPockets = ashProperties?.lastUsername?.toLowerCase() !== 'accodorian' ? itemPockets : [...itemPockets,
		['Jumbo olive', 'Oil of slipperiness', 570, '/images/itemimages/olive.gif'],
	];
	const ascensions = ashProperties?.knownAscensions ?? 0;
	const localFightPockets = [...fightPockets, ascensions % 2 == 0 ? skinflute : camelsToe, blooper];
	return (
		<div id="preact_root">
			<PropertiesContext.Provider value={ashProperties}>
				<ButtonRow title="Stats" buttons={statPockets} />
				<ButtonRow title="Fights" buttons={localFightPockets} />
				<ButtonRow title="Bell Fights" buttons={bellPockets} />
				<ButtonRow title="Buffs" buttons={buffPockets} />
				<ButtonRow title="Items" buttons={localItemPockets} />
				<ButtonRow title="Chess Pieces" buttons={chessPockets} />
			</PropertiesContext.Provider>
		</div>
	);
};

export default App;
