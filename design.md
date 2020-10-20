# InCardMental

## What is it

InCardMental is a deck building incremental game with fast reset loops. It strives to use similar mechanics as popular deck building games like Slay the Spire to provide strategy and thought to your deck and how to play your hand, while leaning into an incremental game mindset

## Term explanations

- Round: A round is defined by the player depleting their deck. A round starts with a full deck that the player has built, and ends when they have exhausted the deck
- Hand: A hand of cards. You will play multiple hands of cards in any given round of InCardMental
- Exhausted: Exhausted in InCardMental refers to a hand that can no longer be played, or a draw deck that has no more cards available to be drawn. e.g. Your deck has been exhausted (There are 0 cards in your deck)
- Player Resources: The overarching resources that the player can accumulate during a round and spend to purchase cards after a round
- Hand Resource: The amount of card playing power the player has. This limits how many cards a player can play with any given hand

## Mechanics

### Core loop

The core loop of InCardMental will be exhausting your deck. As in normal deck based games, you have a deck that you draw cards from into your hand. The players ability to play your hand will be limited by their Hand Resource (energy, power, whatever you want). Once you have exhausted your Hand Resource, the rest of your hand will be forfeit and you will draw a new hand from your deck. Once your deck is exhausted, the round is over. After the round the player will have accumulated some Player Resources. These will be able to be spent in a [shop](#shop) to improve your next run. By purchasing better cards and global upgrades (increase hand size, max energy, max deck size, etc), the player will be able to gain more from their hands, and overall get more from each round to purchase more powerful upgrades/cards.

There will need to be some kind of larger progressions that keeps player interested as well outside of just getting bigger numbers. This could be in the form of some kind of story, unlocking new interesting features (Anyone want a card growing farm?), or potentially some higher order game reset with permanent bonuses (this will be boring for some players, many people enjoy "prestige" mechanics though. This also means there have to be higher level content and new mechanics to unlock however, otherwise there is no point except for the sake of it)

### Cards

Cards are central to the players progression. Cards are the main way to gain Player Resources to purchase upgrades.

Cards will be have a Hand Resource cost to play, and an effect

Effects include but are not limited to: 
 - Give you plain resources (+1 Wood, +1 Stone, +5 bricks)
 - Affect your next card (Double it, play it twice, halve the cost)
 - Affect your ability to play cards (+2 energy, +1 energy next round, draw x cards)

### Hands

A hand is a set of cards that you have available to play. The player will be limited by their hand size on how many cards they have available, and they will be limited by their Hand Resource on how many of those cards they can play. Each card will have a varying cost on how much of their Hand Resource they cost to play. Once a player runs our of Player Resource they can end the round to discard the rest of their hand and get a new hand from their deck. The Cap on the Player Resource will be ugpradeable over time to enable players to play more cards per hand.

### Rounds

A round begins when the player chooses to start. The player can choose what [deck](#decks) they would like to play with when they start the round. The round progresses as the player plays their hand and pulls new cards from the deck for each round. Once the deck has 0 cards in it and the player finishes their hand, the round is over.

### Decks

The player's deck is a set of cards that the player will be able to draw from during a [round](#rounds). The player can dictate what cards are in their deck prior to embarking on a round. The deck will have upper and lower limits on how many cards can be in it. This is to prevent the player from creating a deck with a bajillion cards that never runs out, or a strictly small deck that could abuse certain card interactions (will be hard to wholesale prevent this). The upper limit on the deck size will be upgradeable over time.

### Shop

The shop is where the player will be able to purchase upgrades and cards from the resources they have earnt during their previous round(s). This will be the main form of progression and will offer things such as

- New cards that the player can incorporate into their decks
- Global effects that improve player outcomes
    - More Hand Resource
    - Higher deck size cap
    - Double all resources
    - Unlock more card tiers
- Unlock new systems that can run parallel to rounds

### Card playing pipeline

More of a design decision about code this one. My thought is that any cards or upgrades that illicit effects on subsequent card plays should be put into a sort of queue of effects. When a card is played, its effects are then run through the pipeline and transformed by those effects. The pipeline will just be a list of functions that need to be applied to the card's effect. If effect are multiplicitive this shouldn't be an issue, but if they're additive, order of operations might change the outcome. If effects are one time as well, they need to be applied and then removed from the pipeline. I have a feeling that there should be 2 different pipelines as well depending on how upgrades vs card effects work. A played card should potentially go through a round effects pipeline, followed by a global effects pipeline.

### Questions

- Should Player Resources be reset at the start of the round? Do we want players to accumulate Player Resources over time, or do we want them to build decks for specific purposes to hit targets for specific upgrades?