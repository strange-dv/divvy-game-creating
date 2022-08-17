export const IDL = {
    "version": "0.1.0",
    "name": "divvy",
    "instructions": [
        {
            "name": "initializeState",
            "docs": [
                "Initializes the global state of the Divvy program.",
                "",
                "### Parameters",
                ""
            ],
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
            "docs": [
                "Allows the divvy admin to update settings fields in the global state.",
                "",
                "### Parameters",
                "- `min_bet`: The minimum bet amount.",
                "- `max_bet`: The maximum bet amount.",
                "- `default_sport_liquidity`: The default sport liquidity.",
                "- `default_game_liquidity`: The default game liquidity."
            ],
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
                    "name": "game",
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
                    "name": "gameId",
                    "type": "u64"
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
            "docs": [
                "Places a bet based on the parameters provided",
                "",
                "### Parameters",
                "- `bet_type` - The type of bet to place (e.g. moneyline, spread, over/under)",
                "- `bet_amount` - The amount of USDC to bet",
                "- `expected_odds` - The odds a user is expecting when they place the bet (error if fetch odds don't match)",
                "- `sport_id` - The ID of the sport the bet is for",
                "- `match_id` - The ID of the match the bet is for",
                "- `outcome_id` - The ID of the outcome the bet is for. Used to fetch odds from oracle"
            ],
            "accounts": [
                {
                    "name": "admin",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "user",
                    "isMut": true,
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
                    "name": "gameBufferRelayer",
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
                    "name": "betType",
                    "type": "u8"
                },
                {
                    "name": "betAmount",
                    "type": "u64"
                },
                {
                    "name": "expectedOdds",
                    "type": "u8"
                },
                {
                    "name": "sportId",
                    "type": "u8"
                },
                {
                    "name": "matchId",
                    "type": "u8"
                },
                {
                    "name": "outcomeId",
                    "type": "u64"
                }
            ]
        },
        {
            "name": "initializeUser",
            "docs": [
                "Initializes a user account",
                "",
                "### Parameters",
                ""
            ],
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
            "docs": [
                "Initializes the house pool and creates all necessary accounts",
                "",
                "### Parameters",
                ""
            ],
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
            "docs": [
                "Initializes the global state of the Divvy program.",
                "",
                "### Parameters",
                "- `amount`: The amount of USDC to deposit into the house."
            ],
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
            "docs": [
                "Initializes the global state of the Divvy program.",
                "",
                "### Parameters",
                "- `amount`: The amount of USDC to withdraw."
            ],
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
                    "name": "game",
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
                        "name": "betAmount",
                        "type": "u64"
                    },
                    {
                        "name": "escrowedTokensOfBettorBump",
                        "type": "u8"
                    },
                    {
                        "name": "payoutIfWon",
                        "type": "u64"
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
            "name": "Game",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "gameId",
                        "type": "u64"
                    },
                    {
                        "name": "sportId",
                        "type": "u8"
                    },
                    {
                        "name": "active",
                        "type": "bool"
                    },
                    {
                        "name": "paused",
                        "type": "bool"
                    },
                    {
                        "name": "result",
                        "type": {
                            "defined": "GameResult"
                        }
                    },
                    {
                        "name": "totalBets",
                        "type": "u8"
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
                        "name": "lockedLiquidity",
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
            "name": "BetData",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "B1",
                        "fields": [
                            {
                                "defined": "MoneylineBet"
                            }
                        ]
                    },
                    {
                        "name": "B2",
                        "fields": [
                            {
                                "defined": "SpreadBet"
                            }
                        ]
                    },
                    {
                        "name": "B3",
                        "fields": [
                            {
                                "defined": "OverUnderBet"
                            }
                        ]
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
        }
    ],
    "metadata": {
        "address": "Bixrye3pxPLN48Qu3rTiogaaDh71EKJYM3YZxCi2Qn5K"
    }
}
