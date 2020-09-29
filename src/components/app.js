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
];

const camelsToe = ['Camel\'s Toe', '2 stars/lines, olfact', 317, '/images/adventureimages/cameltoe.gif'];
const skinflute = ['Skinflute', '2 stars/lines, olfact', 383, '/images/adventureimages/skinflute.gif'];

const bellPockets = [
	['Sizzling desk bell', 'YR source', 517, '/images/adventureimages/ccs_daughter.gif'],
	['Frost-rimed desk bell', 'Cold wads, nuggets, powder', 587, '/images/adventureimages/ccs_herald.gif'],
	['Uncanny desk bell', '3 eldritch effluvium', 590, '/images/adventureimages/ccs_tentacle.gif'],
	['Nasty desk bell', 'Goat cheese, milk', 653, '/images/adventureimages/ccs_disciple.gif'],
	['Greasy desk bell', 'Star chart, 2 stars/lines', 533, '/images/adventureimages/ccs_astrologer.gif'],
];

const buffPockets = [
	['Filthworm Drone Stench (5)', 'Skip 2 worms', 343, '/images/itemimages/stench.gif'],
	['Alarm clock', 'Tomorrow, +666% stats', 121, '/images/itemimages/yeg_blessing.gif'],
	['Hand soap', '+200% spell damage', 177, '/images/itemimages/yeg_sigils.gif'],
	['Medieval Mage Mayhem (60)', '+50% weapon/+100% spell damage', 617, '/images/itemimages/swords.gif'],
	['Barely Visible (20)', '-10% combat', 347, '/images/itemimages/pocket.gif'],
	['Very Attractive (20)', '+10% combat', 53, '/images/itemimages/louder.gif'],
];

const itemPockets = [
	['Tangerine', 'Hawking\'s elixir', 396, '/images/itemimages/tangerine.gif'],
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
	['alarm clock', 'Potion', 121, '/images/itemimages/yeg_clock.gif'],
	['ashtray', 'Combat Item', 409, '/images/itemimages/yeg_ashtray.gif'],
	['disposable razor', 'Combat Item', 322, '/images/itemimages/yeg_razor.gif'],
	['hand soap', 'Potion', 177, '/images/itemimages/yeg_soap.gif'],
	['minibar key', 'Gives random booze', 660, '/images/itemimages/yeg_key.gif'],
	['mouthwash', 'Potion', 26, '/images/itemimages/yeg_mouthwash.gif'],
	['pillow mint', 'Food', 439, '/images/itemimages/yeg_mint.gif'],
	['sewing kit', 'Full HP restore', 642, '/images/itemimages/yeg_sewingkit.gif'],
	['stationery', 'Hearty messages', 130, '/images/itemimages/yeg_stationery.gif'],
	['toothbrush', 'Potion', 284, '/images/itemimages/yeg_toothbrush.gif'],
];

const aftercoreItemPockets = [
	['flask of moonshine', 'Booze', 324, '/images/itemimages/flask.gif'],
	['cursed piece of thirteen', 'Meat or fight scary pirate', 600, '/images/itemimages/pieceof13.gif'],
	['candy crayons', 'Increased stat from food', 87, '/images/itemimages/candycrayons.gif'],
	['dubious peppermint', 'Makes numberwang', 627, '/images/itemimages/candy.gif'],
	['worst candy', '+10% combat', 548, '/images/itemimages/confused.gif'],
	['handful of honey', 'Makes honey gear', 28, '/images/itemimages/honeyglob.gif'],
	['chocolate seal-clubbing club', '+adv for Seal Clubbers', 381, '/images/itemimages/choc1.gif'],
	['chocolate turtle totem', '+adv for Turtle Tamers', 477, '/images/itemimages/choc2.gif'],
	['chocolate pasta spoon', '+adv for Pastamancers', 654, '/images/itemimages/choc3.gif'],
	['chocolate saucepan', '+adv for Saucerors', 438, '/images/itemimages/choc4.gif'],
	['chocolate disco ball', '+adv for Disco Bandits', 430, '/images/itemimages/choc5.gif'],
	['chocolate stolen accordion', '+adv for Accordion Thieves', 189, '/images/itemimages/choc6.gif'],
];

const App = () => {
	let [ashProperties, setAshProperties] = useState(null);
	// eslint-disable-next-line no-undef
	useEffect(() => setAshProperties(globalAshProperties), []);
	if (ashProperties?.inAftercore === "true") {
		return (
			<div id="preact_root">
				<PropertiesContext.Provider value={ashProperties}>
					<ButtonRow title="Bells" buttons={bellPockets} />
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
	const localFightPockets = [...fightPockets, ascensions % 2 == 0 ? skinflute : camelsToe];
	const inRunBellPockets = bellPockets.splice();
	inRunBellPockets.splice(1, 1)
	return (
		<div id="preact_root">
			<PropertiesContext.Provider value={ashProperties}>
				<ButtonRow title="Stats" buttons={statPockets} />
				<ButtonRow title="Fights" buttons={localFightPockets} />
				<ButtonRow title="Bell Fights" buttons={inRunBellPockets} />
				<ButtonRow title="Buffs" buttons={buffPockets} />
				<ButtonRow title="Items" buttons={localItemPockets} />
				<ButtonRow title="Chess Pieces" buttons={chessPockets} />
			</PropertiesContext.Provider>
		</div>
	);
};

export default App;
