import Card from './Card';
export default function Hand({hand}) {
    return (
        <div className="hand">
            <ul>
                {hand.map(card => <Card card={card}/>)}
            </ul>
        </div>
    )
}