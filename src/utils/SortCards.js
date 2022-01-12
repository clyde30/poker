export function SortCards(cards) {
    return cards.sort((a, b) => a.value - b.value);
}