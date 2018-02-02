import { TournamentMatch } from './tournament-match';

export class Tournament {
    tournamentId: string;
    tournamentName: string;
    headMatchId: string;
    matchTypeId: string;
    createdDate: Date;
    updateDate: Date;
    tournamentMatch: TournamentMatch;
}