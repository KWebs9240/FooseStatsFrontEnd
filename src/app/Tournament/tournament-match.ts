import { Match } from '../Match/match';

export class TournamentMatch {
    currentMatch: Match;
    leftMatch: TournamentMatch;
    rightMatch: TournamentMatch;
}