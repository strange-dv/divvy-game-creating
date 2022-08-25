export const IDL = {
    "version": "0.1.0",
    "name": "divvy",
    "instructions": [
    {
        "name": "initializeState",
        "accounts": [
            {
                "name": "admin",
                "isMut": true,
                "isSigner": true
            },
            {
                "name": "state",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "betMint",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "betVault",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "betVaultAuthority",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "rent",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "tokenProgram",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "systemProgram",
                "isMut": false,
                "isSigner": false
            }
        ],
        "args": []
    },
    {
        "name": "updateState",
        "accounts": [
            {
                "name": "state",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "admin",
                "isMut": true,
                "isSigner": true
            }
        ],
        "args": [
            {
                "name": "minBet",
                "type": "u64"
            },
            {
                "name": "maxBet",
                "type": "u64"
            },
            {
                "name": "defaultSportLiquidity",
                "type": "u64"
            },
            {
                "name": "defaultGameLiquidity",
                "type": "u64"
            }
        ]
    },
    {
        "name": "initializeGame",
        "accounts": [
            {
                "name": "admin",
                "isMut": true,
                "isSigner": true
            },
            {
                "name": "state",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "event",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "eventBufferRelayer",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "systemProgram",
                "isMut": false,
                "isSigner": false
            }
        ],
        "args": [
            {
                "name": "gameId",
                "type": "u64"
            },
            {
                "name": "sportId",
                "type": "u64"
            },
            {
                "name": "maxLiquidity",
                "type": "u64"
            },
            {
                "name": "participantAId",
                "type": "u64"
            },
            {
                "name": "participantBId",
                "type": "u64"
            },
            {
                "name": "participantAName",
                "type": "string"
            },
            {
                "name": "participantBName",
                "type": "string"
            }
        ]
    },
    {
        "name": "initializeSport",
        "accounts": [
            {
                "name": "admin",
                "isMut": true,
                "isSigner": true
            },
            {
                "name": "state",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "sport",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "systemProgram",
                "isMut": false,
                "isSigner": false
            }
        ],
        "args": [
            {
                "name": "sportId",
                "type": "u8"
            },
            {
                "name": "sportName",
                "type": "string"
            }
        ]
    },
    {
        "name": "placeBet",
        "accounts": [
            {
                "name": "admin",
                "isMut": true,
                "isSigner": true
            },
            {
                "name": "user",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "authority",
                "isMut": false,
                "isSigner": true
            },
            {
                "name": "tokenAccountFromBettor",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "betVault",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "state",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "housePoolData",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "housePoolUsdc",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "bet",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "tokenMint",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "tokenProgram",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "eventBufferRelayer",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "event",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "systemProgram",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "rent",
                "isMut": false,
                "isSigner": false
            }
        ],
        "args": [
            {
                "name": "betId",
                "type": "u64"
            },
            {
                "name": "betType",
                "type": "u8"
            },
            {
                "name": "betAmount",
                "type": "u64"
            },
            {
                "name": "expectedOdds",
                "type": "u64"
            },
            {
                "name": "sportId",
                "type": "u64"
            },
            {
                "name": "matchId",
                "type": "u64"
            },
            {
                "name": "outcomeId",
                "type": "u64"
            }
        ]
    },
    {
        "name": "initializeUser",
        "accounts": [
            {
                "name": "user",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "state",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "authority",
                "isMut": true,
                "isSigner": true
            },
            {
                "name": "rent",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "systemProgram",
                "isMut": false,
                "isSigner": false
            }
        ],
        "args": []
    },
    {
        "name": "initializeHouse",
        "accounts": [
            {
                "name": "housePoolAuthority",
                "isMut": true,
                "isSigner": true
            },
            {
                "name": "housePoolAccount",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "usdcMint",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "houseTokenMint",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "housePoolUsdc",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "systemProgram",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "tokenProgram",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "rent",
                "isMut": false,
                "isSigner": false
            }
        ],
        "args": []
    },
    {
        "name": "depositUsdc",
        "accounts": [
            {
                "name": "userAuthority",
                "isMut": false,
                "isSigner": true
            },
            {
                "name": "userUsdc",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "userHouseToken",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "housePoolAccount",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "houseTokenMint",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "housePoolUsdc",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "usdcMint",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "tokenProgram",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "systemProgram",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "rent",
                "isMut": false,
                "isSigner": false
            }
        ],
        "args": [
            {
                "name": "amount",
                "type": "u64"
            }
        ]
    },
    {
        "name": "withdrawUsdc",
        "accounts": [
            {
                "name": "userAuthority",
                "isMut": true,
                "isSigner": true
            },
            {
                "name": "userUsdc",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "userHouseToken",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "housePoolAccount",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "houseTokenMint",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "housePoolUsdc",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "usdcMint",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "aggregator",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "tokenProgram",
                "isMut": false,
                "isSigner": false
            }
        ],
        "args": [
            {
                "name": "amount",
                "type": "u64"
            }
        ]
    },
    {
        "name": "setSportPaused",
        "accounts": [
            {
                "name": "sport",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "state",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "admin",
                "isMut": false,
                "isSigner": true
            }
        ],
        "args": [
            {
                "name": "paused",
                "type": "bool"
            }
        ]
    },
    {
        "name": "setGamePaused",
        "accounts": [
            {
                "name": "event",
                "isMut": true,
                "isSigner": false
            },
            {
                "name": "state",
                "isMut": false,
                "isSigner": false
            },
            {
                "name": "admin",
                "isMut": true,
                "isSigner": true
            }
        ],
        "args": [
            {
                "name": "paused",
                "type": "bool"
            }
        ]
    }
],
    "accounts": [
    {
        "name": "Bet",
        "type": {
            "kind": "struct",
            "fields": [
                {
                    "name": "bettorKey",
                    "type": "publicKey"
                },
                {
                    "name": "bettorTokenAccount",
                    "type": "publicKey"
                },
                {
                    "name": "betData",
                    "type": "u8"
                },
                {
                    "name": "escrowedTokensOfBettorBump",
                    "type": "u8"
                },
                {
                    "name": "betAmount",
                    "type": "u64"
                },
                {
                    "name": "payoutIfWon",
                    "type": "u64"
                },
                {
                    "name": "event",
                    "type": "publicKey"
                },
                {
                    "name": "betType",
                    "type": {
                        "defined": "BetType"
                    }
                },
                {
                    "name": "participant",
                    "type": {
                        "defined": "AtsMlBetSubType"
                    }
                },
                {
                    "name": "risk",
                    "type": "u64"
                },
                {
                    "name": "agreedOdds",
                    "type": "u32"
                },
                {
                    "name": "isMlDraw",
                    "type": "bool"
                },
                {
                    "name": "atsLine",
                    "type": "i32"
                },
                {
                    "name": "overUnderScoreTotal",
                    "type": "u64"
                },
                {
                    "name": "totalsSubType",
                    "type": {
                        "defined": "TotalsBetSubType"
                    }
                },
                {
                    "name": "complete",
                    "type": "bool"
                },
                {
                    "name": "result",
                    "type": {
                        "defined": "BetResult"
                    }
                }
            ]
        }
    },
    {
        "name": "DivvyEvent",
        "type": {
            "kind": "struct",
            "fields": [
                {
                    "name": "eventId",
                    "type": "u64"
                },
                {
                    "name": "sportId",
                    "type": "u64"
                },
                {
                    "name": "result",
                    "type": {
                        "defined": "GameResult"
                    }
                },
                {
                    "name": "totalBets",
                    "type": "u64"
                },
                {
                    "name": "maxLiquidity",
                    "type": "u64"
                },
                {
                    "name": "liquidityUsage",
                    "type": "u64"
                },
                {
                    "name": "participants",
                    "type": {
                        "defined": "Participants"
                    }
                },
                {
                    "name": "liquidityNeeded",
                    "type": "u64"
                },
                {
                    "name": "atsMlTotalWagered",
                    "type": "u64"
                },
                {
                    "name": "atsMlWorstPayout",
                    "type": "u64"
                },
                {
                    "name": "atsMlLiquidityNeeded",
                    "type": "u64"
                },
                {
                    "name": "atsMlOutcomes",
                    "type": {
                        "vec": {
                            "defined": "AtsMlOutcome"
                        }
                    }
                },
                {
                    "name": "totalsTotalWagered",
                    "type": "u64"
                },
                {
                    "name": "totalsWorstPayout",
                    "type": "u64"
                },
                {
                    "name": "totalsLiquidityNeeded",
                    "type": "u64"
                },
                {
                    "name": "totalsOutcomes",
                    "type": {
                        "vec": {
                            "defined": "TotalsOutcome"
                        }
                    }
                }
            ]
        }
    },
    {
        "name": "HouseAccount",
        "type": {
            "kind": "struct",
            "fields": [
                {
                    "name": "bumps",
                    "type": {
                        "defined": "PoolBumps"
                    }
                },
                {
                    "name": "housePoolAuthority",
                    "type": "publicKey"
                },
                {
                    "name": "usdcMint",
                    "type": "publicKey"
                },
                {
                    "name": "houseTokenMint",
                    "type": "publicKey"
                },
                {
                    "name": "housePoolUsdc",
                    "type": "publicKey"
                },
                {
                    "name": "lockedLiquidity",
                    "type": "u64"
                }
            ]
        }
    },
    {
        "name": "Sport",
        "type": {
            "kind": "struct",
            "fields": [
                {
                    "name": "sportId",
                    "type": "u8"
                },
                {
                    "name": "sportName",
                    "type": "string"
                },
                {
                    "name": "paused",
                    "type": "bool"
                }
            ]
        }
    },
    {
        "name": "State",
        "type": {
            "kind": "struct",
            "fields": [
                {
                    "name": "admin",
                    "type": "publicKey"
                },
                {
                    "name": "housePoolPaused",
                    "type": "bool"
                },
                {
                    "name": "bettingPaused",
                    "type": "bool"
                },
                {
                    "name": "mint",
                    "type": "publicKey"
                },
                {
                    "name": "betVault",
                    "type": "publicKey"
                },
                {
                    "name": "betVaultAuthority",
                    "type": "publicKey"
                },
                {
                    "name": "betVaultBump",
                    "type": "u8"
                },
                {
                    "name": "maxBet",
                    "type": "u64"
                },
                {
                    "name": "minBet",
                    "type": "u64"
                },
                {
                    "name": "maxLockedLiquidityPercent",
                    "type": "u8"
                },
                {
                    "name": "sportsbookFeePercent",
                    "type": "u16"
                },
                {
                    "name": "defaultSportLiquidity",
                    "type": "u64"
                },
                {
                    "name": "defaultGameLiquidity",
                    "type": "u64"
                },
                {
                    "name": "lockedLiquidityUsage",
                    "type": "u64"
                },
                {
                    "name": "activeBets",
                    "type": "u64"
                },
                {
                    "name": "games",
                    "type": "u64"
                }
            ]
        }
    },
    {
        "name": "User",
        "type": {
            "kind": "struct",
            "fields": [
                {
                    "name": "authority",
                    "type": "publicKey"
                },
                {
                    "name": "activeBets",
                    "type": "u8"
                },
                {
                    "name": "performance",
                    "type": "i64"
                }
            ]
        }
    }
],
    "types": [
    {
        "name": "ReadResultParams",
        "type": {
            "kind": "struct",
            "fields": [
                {
                    "name": "gameData",
                    "type": {
                        "option": "string"
                    }
                }
            ]
        }
    },
    {
        "name": "Params",
        "type": {
            "kind": "struct",
            "fields": [
                {
                    "name": "minBet",
                    "type": "u64"
                },
                {
                    "name": "maxBet",
                    "type": "u64"
                },
                {
                    "name": "defaultSportLiquidity",
                    "type": "u64"
                },
                {
                    "name": "defaultGameLiquidity",
                    "type": "u64"
                }
            ]
        }
    },
    {
        "name": "MoneylineBet",
        "type": {
            "kind": "struct",
            "fields": [
                {
                    "name": "betType",
                    "type": {
                        "defined": "BetType"
                    }
                },
                {
                    "name": "betAmount",
                    "type": "u64"
                },
                {
                    "name": "outcomeId",
                    "type": "u8"
                },
                {
                    "name": "odds",
                    "type": "u8"
                },
                {
                    "name": "payoutIfWon",
                    "type": "u64"
                },
                {
                    "name": "complete",
                    "type": "bool"
                }
            ]
        }
    },
    {
        "name": "SpreadBet",
        "type": {
            "kind": "struct",
            "fields": [
                {
                    "name": "betType",
                    "type": {
                        "defined": "BetType"
                    }
                },
                {
                    "name": "betAmount",
                    "type": "u64"
                },
                {
                    "name": "predictedSpread",
                    "type": "u8"
                },
                {
                    "name": "outcomeId",
                    "type": "u8"
                },
                {
                    "name": "odds",
                    "type": "u8"
                },
                {
                    "name": "payoutIfWon",
                    "type": "u64"
                },
                {
                    "name": "complete",
                    "type": "bool"
                }
            ]
        }
    },
    {
        "name": "OverUnderBet",
        "type": {
            "kind": "struct",
            "fields": [
                {
                    "name": "betType",
                    "type": {
                        "defined": "BetType"
                    }
                },
                {
                    "name": "betAmount",
                    "type": "u64"
                },
                {
                    "name": "outcomeId",
                    "type": "u8"
                },
                {
                    "name": "odds",
                    "type": "u8"
                },
                {
                    "name": "payoutIfWon",
                    "type": "u64"
                },
                {
                    "name": "complete",
                    "type": "bool"
                }
            ]
        }
    },
    {
        "name": "AtsMlOutcome",
        "type": {
            "kind": "struct",
            "fields": [
                {
                    "name": "scoreDifference",
                    "type": "i32"
                },
                {
                    "name": "payout",
                    "type": "u64"
                },
                {
                    "name": "pushPayouts",
                    "type": "u64"
                },
                {
                    "name": "pushBetsMaxPayoutForB",
                    "type": "u64"
                }
            ]
        }
    },
    {
        "name": "TotalsOutcome",
        "type": {
            "kind": "struct",
            "fields": [
                {
                    "name": "totalScore",
                    "type": "u64"
                },
                {
                    "name": "overPayouts",
                    "type": "u64"
                },
                {
                    "name": "underPayouts",
                    "type": "u64"
                },
                {
                    "name": "pushPayouts",
                    "type": "u64"
                },
                {
                    "name": "totalPayouts",
                    "type": "u64"
                },
                {
                    "name": "overPushPayouts",
                    "type": "u64"
                },
                {
                    "name": "underPushPayouts",
                    "type": "u64"
                }
            ]
        }
    },
    {
        "name": "Participant",
        "type": {
            "kind": "struct",
            "fields": [
                {
                    "name": "id",
                    "type": "u64"
                },
                {
                    "name": "name",
                    "type": "string"
                }
            ]
        }
    },
    {
        "name": "Participants",
        "type": {
            "kind": "struct",
            "fields": [
                {
                    "name": "a",
                    "type": {
                        "defined": "Participant"
                    }
                },
                {
                    "name": "b",
                    "type": {
                        "defined": "Participant"
                    }
                }
            ]
        }
    },
    {
        "name": "PoolBumps",
        "type": {
            "kind": "struct",
            "fields": [
                {
                    "name": "housePoolAccount",
                    "type": "u8"
                },
                {
                    "name": "houseTokenMint",
                    "type": "u8"
                },
                {
                    "name": "housePoolUsdc",
                    "type": "u8"
                }
            ]
        }
    },
    {
        "name": "BufferErrorCode",
        "type": {
            "kind": "enum",
            "variants": [
                {
                    "name": "InvalidSwitchboardAccount"
                },
                {
                    "name": "ExpectedResultMismatch"
                },
                {
                    "name": "StaleBuffer"
                },
                {
                    "name": "StringConversionFailed"
                },
                {
                    "name": "BadGameSchema"
                }
            ]
        }
    },
    {
        "name": "Outcome",
        "type": {
            "kind": "enum",
            "variants": [
                {
                    "name": "Win"
                },
                {
                    "name": "Loss"
                },
                {
                    "name": "Push"
                },
                {
                    "name": "Paused"
                },
                {
                    "name": "Walkover"
                },
                {
                    "name": "Rescheduled"
                },
                {
                    "name": "Cancelled"
                },
                {
                    "name": "Retired"
                }
            ]
        }
    },
    {
        "name": "BetType",
        "type": {
            "kind": "enum",
            "variants": [
                {
                    "name": "Moneyline"
                },
                {
                    "name": "Spread"
                },
                {
                    "name": "OverUnder"
                }
            ]
        }
    },
    {
        "name": "AtsMlBetSubType",
        "type": {
            "kind": "enum",
            "variants": [
                {
                    "name": "A"
                },
                {
                    "name": "B"
                },
                {
                    "name": "Push"
                }
            ]
        }
    },
    {
        "name": "TotalsBetSubType",
        "type": {
            "kind": "enum",
            "variants": [
                {
                    "name": "Over"
                },
                {
                    "name": "Under"
                }
            ]
        }
    },
    {
        "name": "BetResult",
        "type": {
            "kind": "enum",
            "variants": [
                {
                    "name": "Win"
                },
                {
                    "name": "Loss"
                },
                {
                    "name": "Refund"
                }
            ]
        }
    },
    {
        "name": "GameResult",
        "type": {
            "kind": "enum",
            "variants": [
                {
                    "name": "Incomplete"
                },
                {
                    "name": "HomeWin"
                },
                {
                    "name": "AwayWin"
                },
                {
                    "name": "Draw"
                }
            ]
        }
    }
],
    "errors": [
    {
        "code": 6000,
        "name": "Unauthorized",
        "msg": "Unauthorized"
    },
    {
        "code": 6001,
        "name": "BetTooLow",
        "msg": "Bet amount is too low"
    },
    {
        "code": 6002,
        "name": "BetTooHigh",
        "msg": "Bet amount is too high"
    },
    {
        "code": 6003,
        "name": "BetUnavailable",
        "msg": "Betting is not allowed"
    },
    {
        "code": 6004,
        "name": "InsufficientLiquidity",
        "msg": "Insufficient liquidity"
    },
    {
        "code": 6005,
        "name": "EventInProgress",
        "msg": "Event in progress"
    },
    {
        "code": 6006,
        "name": "LowUsdc",
        "msg": "Not enough USDC"
    },
    {
        "code": 6007,
        "name": "AlreadyInitialized",
        "msg": "Index slot already initialized"
    },
    {
        "code": 6008,
        "name": "DefaultError",
        "msg": "An error occurred"
    },
    {
        "code": 6009,
        "name": "WrongBetType",
        "msg": "Wrong bet type"
    },
    {
        "code": 6010,
        "name": "WrongOutcome",
        "msg": "There is no such outcome_id in game outcomes"
    },
    {
        "code": 6011,
        "name": "WithdrawBlocked",
        "msg": "Withdrawals are blocked because there are games in progress"
    }
],
    "metadata": {
    "address": "BShUxp6KHZdi7zcqEo4i5EsgdjKsbVddGBtgCuCmscqP"
}
}