
export default function Card({cardImagePath}) {
    return (
        <div className="card">
            <img src={`images/svg_playing_cards/fronts/png_96_dpi/${cardImagePath}.png`} alt="card" />
            </div>
    );
}