import { Player } from '../Player/player';
import { MatchType } from '../MatchType/match-type';

export class Match {
    matchId: string;
    player1Id: string;
    player1: Player;
    player2Id: string;
    player2: Player;
    player3Id: string;
    player3: Player;
    player4Id: string;
    player4: Player;
    team1Score: number;
    team2Score: number;
    isDoubles: boolean;
    matchTypeId: string;
    matchType: MatchType;
    updateDate: Date;
}