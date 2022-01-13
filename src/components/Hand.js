import Card from './Card';

export default function Hand({hand}) {
    

    return (
        <div className="hand">
            <ul>
                <h2> hand rank = {hand.rank.name}</h2>
                {hand.map(card => <Card card={card}/>)}
            </ul>
        </div>
    )
}