import { TournamentMatch } from './tournament-match';

export class Tournament {
    tournamentId: string;
    tournamentName: string;
    headMatchId: string;
    createdDate: Date;
    updateDate: Date;
    tournamentMatch: TournamentMatch;
}