import { SortCards } from "./SortCards";

export function RankHand(hand) {
    // hand must be sorted by value
    hand = SortCards(hand);
    let rank = 0;

    //check straight flush
    if (IsFlush(hand) && IsStraight(hand)) {
        rank = 8;
    }

    //check flush
    if (IsFlush(hand) && !IsStraight(hand)) {
        rank = 5;
    }

    //check straight
    if (!IsFlush(hand) && IsStraight(hand)) {
        rank = 4;
    }

    //check four of a kind
    if (IsFourOfAKind(hand)) {
        rank = 7;
    }

    //check full house
    if (IsPair(hand) && IsThreeOfAKind(hand)) {
            rank = 6;
    }

    //check three of a kind
    if (IsThreeOfAKind(hand)) {
        rank = 3;
    }

    //check two pair
    if (IsTwoPair(hand)) {
        rank = 2;
    }

    //check pair
    if (IsPair(hand)) {
        rank = 1;
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

