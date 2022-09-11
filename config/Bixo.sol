enum Type {
        SecoMilhar, 
        SecoDezena, 
        SecoCentena, 
        SecoGrupo,
        CercadoMilhar,
        CercadoDezena,
        CercadoCentena,
        CercadoGrupo,
        DuqueMilhar,
        DuqueDezena,
        DuqueCentena,
        DuqueGrupo,
        TernoMilhar,
        TernoDezena,
        TernoCentena,
        TernoGrupo
    }

    struct Bixo {
        Type ;
        uint256 startTime;
        uint256 endTime;
        uint256 priceTicketInCake;
        uint256 discountDivisor;
        uint256[6] rewardsBreakdown; // 0: 1 matching number // 5: 6 matching numbers
        uint256 treasuryFee; // 500: 5% // 200: 2% // 50: 0.5%
        uint256[6] cakePerBracket;
        uint256[6] countWinnersPerBracket;
        uint256 firstTicketId;
        uint256 firstTicketIdNextLottery;
        uint256 amountCollectedInCake;
        uint32 finalNumber;
    }

    struct Aposta {
        uint32 number;
        address owner;
    }