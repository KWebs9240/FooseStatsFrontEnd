import { Match } from '../../Match/match';

export class PlayerDetail {
    playerId: string;
    firstName: string;
    lastName: string;
    nickName: string;
    updateDate: Date;
    matchesPlayed: Match[];
}