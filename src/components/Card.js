
export default function Card({card}) {
    return (
        <div className="card">
            <div>{`${card.value} of ${card.suit}`}</div>
            <img src={`images/svg_playing_cards/fronts/png_96_dpi/${card.suit}_${card.value}.png`} alt="card" />
            </div>
    );
}