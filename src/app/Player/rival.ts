export class Rival {
    playerId: string;
    firstName: string;
    lastName: string;
    nickName: string;
    updateDate: Date;
    hexColor: string;
    locationId: string;
    almaMaterId: string;
    rivalGamesPlayed: Map<string, number>;
    rivalGamesWon: Map<string, number>;
    rivalGamesWonPct: Map<string, number>;
    playerGamesPlayed: Map<string, number>;
    playerGamesWon: Map<string, number>;
    playerGamesWonPct: Map<string, number>;
    rivalTotalPointsScored: Map<string, number>;
    rivalTotalPointsAllowed: Map<string, number>;
    rivalPointsPerGame: Map<string, number>;
    playerTotalPointsScored: Map<string, number>;
    playerTotalPointsAllowed: Map<string, number>;
    playerPointsPerGame: Map<string, number>;
}