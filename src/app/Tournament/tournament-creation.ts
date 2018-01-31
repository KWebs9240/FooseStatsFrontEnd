import { Player } from '../Player/player';

export class TournamentCreation {
    tournamentId: string;
    tournamentName: string;
    headMatchId: string;
    createdDate: Date;
    updateDate: Date;
    participants: Player[];
}