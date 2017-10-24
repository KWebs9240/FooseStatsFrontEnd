export class Player {
    playerId: string;
    firstName: string;
    lastName: string;
    nickName: string;
    updateDate: Date;
    hexColor: string;
    gamesPlayed: Map<string, number>;
    gamesWon: Map<string, number>;
    gamesWonPct: Map<string, number>;
    totalPointsScored: Map<string, number>;
    totalPointsAllowed: Map<string, number>;
    pointsPerGame: Map<string, number>;
}