import Card from './Card';
import { RankHand } from '../utils/RankHand';

export default function Hand({hand}) {
    const handRank = RankHand(hand);

    return (
        <div className="hand">
            <ul>
                <h2> hand rank = {handRank}</h2>
                {hand.map(card => <Card card={card}/>)}
            </ul>
        </div>
    )
}