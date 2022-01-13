import { SortCards } from "./SortCards";

export function RankHand(hand) {
    // hand must be sorted by value
    hand = SortCards(hand);

    let rank = {
        value: 0,
        highCard: hand[4].value,
        name: `${hand[4].name} high`
    }

    //check straight flush
    if (IsFlush(hand) && IsStraight(hand)) {
        rank.value = 8;
        rank.name = 'straight flush';
        rank.highCard = hand[4];
        return rank;
    }

    //check flush
    if (IsFlush(hand) && !IsStraight(hand)) {
        rank.value = 5;
        rank.name = 'flush';
        rank.highCard = hand[4];
        return rank;
    }

    //check straight
    if (!IsFlush(hand) && IsStraight(hand)) {
        rank.value = 4;
        rank.name = 'straight';
        rank.highCard = hand[4];
        return rank;
    }

    //check four of a kind
    if (IsFourOfAKind(hand)) {
        rank.value = 7;
        rank.name = 'four of a kind';
        rank.highCard = hand[3];
        return rank;
    }

    //check full house
    if (IsPair(hand) && IsThreeOfAKind(hand)) {
        rank.value = 6;
        rank.name = 'full house';
        rank.highCard = hand[2];
        return rank;
    }

    //check three of a kind
    if (IsThreeOfAKind(hand)) {
        rank.value = 3;
        rank.name = 'three of a kind';
        rank.highCard = hand[2];
        return rank;
    }

    //check two pair
    if (IsTwoPair(hand)) {
        rank.value = 2;
        rank.name = 'two pair';

        //find the highest pair
        //I'm not sure this is correct
        if (hand[4].value === hand[3].value) {
            rank.highCard = hand[4];
        } else
            rank.highCard = hand[3];
        return rank;
    }

    //check pair
    if (IsPair(hand)) {
        rank.value = 1;
        //this is not correct
        rank.highCard = hand[2];
        rank.name = `pair of ${hand[2].name}s`;

        return rank;
    }

    return rank;
}


function IsThreeOfAKind(hand) {
    let threeOfAKind = false;
    if ((hand[0].value === hand[2].value) || (hand[1].value === hand[3].value) || (hand[2].value === hand[4].value)) {
        threeOfAKind = true;
    }
    return threeOfAKind;
}

function IsFourOfAKind(hand) {
    let isFourOfAKind = false;
    if ((hand[0].value === hand[3].value) || (hand[1].value === hand[4].value)) {
        isFourOfAKind = true;
    }

    return isFourOfAKind;
}

function IsTwoPair(hand) {
    let isTwoPair = false;
    if ((hand[0].value === hand[1].value) && (hand[2].value === hand[3].value)) {
        isTwoPair = true;
    }
    if ((hand[0].value === hand[1].value) && (hand[3].value === hand[4].value)) {
        isTwoPair = true;
    }
    if ((hand[1].value === hand[2].value) && (hand[3].value === hand[4].value)) {
        isTwoPair = true;
    }
    return isTwoPair;
}

function IsPair(hand) {
    let isPair = false;
    if ((hand[0].value === hand[1].value) || (hand[1].value === hand[2].value) || (hand[2].value === hand[3].value) || (hand[3].value === hand[4].value)) {
        isPair = true;
    }
    return isPair;
}

function IsFlush(hand) {
    let suit = hand[0].suit;
    let isFlush = true;
    for (let i = 1; i < hand.length; i++) {
        if (hand[i].suit !== suit) {
            isFlush = false;
        }
    }
    return isFlush;
}

function IsStraight(hand) {
    let isStraight = true;
    let value = hand[0].value;
    for (let i = 1; i < hand.length; i++) {
        if (hand[i].value !== value + 1) {
            isStraight = false;
        }
    }
    return isStraight;
}

