
export default function Card({card}) {
    return (
        <li className="card">
            <h3>{`${card.value} of ${card.suit}`}</h3>
            <img src={`images/svg_playing_cards/fronts/png_96_dpi/${card.suit}_${card.value}.png`} alt="card" />
        </li>
    );
}