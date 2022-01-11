import Card from './Card';
export default function Hand({hand}) {
    return (
        <div className="hand">
            {hand.map(card => <Card card={card}/>)}
        </div>
    )
}