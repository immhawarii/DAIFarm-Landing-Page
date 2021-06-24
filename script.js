const tokenABI = [{
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !0,
            internalType: "address",
            name: "owner",
            type: "address"
        }, {
            indexed: !0,
            internalType: "address",
            name: "spender",
            type: "address"
        }, {
            indexed: !1,
            internalType: "uint256",
            name: "value",
            type: "uint256"
        }],
        name: "Approval",
        type: "event"
    }, {
        inputs: [{
            internalType: "address",
            name: "spender",
            type: "address"
        }, {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "approve",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "account",
            type: "address"
        }, {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "burnFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "spender",
            type: "address"
        }, {
            internalType: "uint256",
            name: "subtractedValue",
            type: "uint256"
        }],
        name: "decreaseAllowance",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "spender",
            type: "address"
        }, {
            internalType: "uint256",
            name: "addedValue",
            type: "uint256"
        }],
        name: "increaseAllowance",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !0,
            internalType: "address",
            name: "previousOwner",
            type: "address"
        }, {
            indexed: !0,
            internalType: "address",
            name: "newOwner",
            type: "address"
        }],
        name: "OwnershipTransferred",
        type: "event"
    }, {
        inputs: [{
            internalType: "address",
            name: "recipient",
            type: "address"
        }, {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "transfer",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !0,
            internalType: "address",
            name: "from",
            type: "address"
        }, {
            indexed: !0,
            internalType: "address",
            name: "to",
            type: "address"
        }, {
            indexed: !1,
            internalType: "uint256",
            name: "value",
            type: "uint256"
        }],
        name: "Transfer",
        type: "event"
    }, {
        inputs: [{
            internalType: "address",
            name: "sender",
            type: "address"
        }, {
            internalType: "address",
            name: "recipient",
            type: "address"
        }, {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "transferFrom",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "newOwner",
            type: "address"
        }],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "owner",
            type: "address"
        }, {
            internalType: "address",
            name: "spender",
            type: "address"
        }],
        name: "allowance",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "account",
            type: "address"
        }],
        name: "balanceOf",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "decimals",
        outputs: [{
            internalType: "uint8",
            name: "",
            type: "uint8"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "name",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "owner",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "symbol",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "totalSupply",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }],
    ETHStakerAdd = "0xB59EC5f900043e5Fb44E537497D46DC2C905EAD0",
    ETHStakerABI = [{
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !0,
            internalType: "address",
            name: "owner",
            type: "address"
        }, {
            indexed: !0,
            internalType: "address",
            name: "spender",
            type: "address"
        }, {
            indexed: !1,
            internalType: "uint256",
            name: "value",
            type: "uint256"
        }],
        name: "Approval",
        type: "event"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !1,
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }, {
            indexed: !1,
            internalType: "address",
            name: "recipient",
            type: "address"
        }],
        name: "OnWithdrawETH",
        type: "event"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !0,
            internalType: "address",
            name: "previousOwner",
            type: "address"
        }, {
            indexed: !0,
            internalType: "address",
            name: "newOwner",
            type: "address"
        }],
        name: "OwnershipTransferred",
        type: "event"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !0,
            internalType: "address",
            name: "from",
            type: "address"
        }, {
            indexed: !0,
            internalType: "address",
            name: "to",
            type: "address"
        }, {
            indexed: !1,
            internalType: "uint256",
            name: "value",
            type: "uint256"
        }],
        name: "Transfer",
        type: "event"
    }, {
        stateMutability: "payable",
        type: "fallback"
    }, {
        inputs: [],
        name: "AddressResetSellLock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [],
        name: "BalanceLimitDivider",
        outputs: [{
            internalType: "uint8",
            name: "",
            type: "uint8"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "ETHWithdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [],
        name: "InitialSupply",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "MaxSellLockTime",
        outputs: [{
            internalType: "uint16",
            name: "",
            type: "uint16"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "MaxTax",
        outputs: [{
            internalType: "uint8",
            name: "",
            type: "uint8"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "SellLimitDivider",
        outputs: [{
            internalType: "uint16",
            name: "",
            type: "uint16"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "address[]",
            name: "addressesToAdd",
            type: "address[]"
        }],
        name: "SetupAddArrayToWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "addressToAdd",
            type: "address"
        }],
        name: "SetupAddToWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [],
        name: "SetupEnableTrading",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [],
        name: "SetupEnableWhitelistTrading",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "liquidityTokenAddress",
            type: "address"
        }],
        name: "SetupLiquidityTokenAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "addressToRemove",
            type: "address"
        }],
        name: "SetupRemoveFromWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint8",
            name: "newShare",
            type: "uint8"
        }],
        name: "TeamChangeMarketingShare",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [],
        name: "TeamCreateLPandBNB",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "bool",
            name: "disabled",
            type: "bool"
        }],
        name: "TeamDisableSellLock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "account",
            type: "address"
        }],
        name: "TeamExcludeAccountFromFees",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "account",
            type: "address"
        }],
        name: "TeamExcludeAccountFromSellLock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "addr",
            type: "address"
        }],
        name: "TeamExcludeFromStaking",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "account",
            type: "address"
        }],
        name: "TeamIncludeAccountToFees",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "account",
            type: "address"
        }],
        name: "TeamIncludeAccountToSellLock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "addr",
            type: "address"
        }],
        name: "TeamIncludeToStaking",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [],
        name: "TeamReleaseLiquidity",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "bool",
            name: "addToStaking",
            type: "bool"
        }],
        name: "TeamRemoveLiquidity",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [],
        name: "TeamRemoveRemainingBNB",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint256",
            name: "sellLockSeconds",
            type: "uint256"
        }],
        name: "TeamSetSellLockTime",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint8",
            name: "burnTaxes",
            type: "uint8"
        }, {
            internalType: "uint8",
            name: "liquidityTaxes",
            type: "uint8"
        }, {
            internalType: "uint8",
            name: "stakingTaxes",
            type: "uint8"
        }, {
            internalType: "uint8",
            name: "buyTax",
            type: "uint8"
        }, {
            internalType: "uint8",
            name: "sellTax",
            type: "uint8"
        }, {
            internalType: "uint8",
            name: "transferTax",
            type: "uint8"
        }],
        name: "TeamSetTaxes",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "bool",
            name: "manual",
            type: "bool"
        }],
        name: "TeamSwitchManualBNBConversion",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint256",
            name: "secondsUntilUnlock",
            type: "uint256"
        }],
        name: "TeamUnlockLiquidityInSeconds",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint256",
            name: "newBalanceLimit",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "newSellLimit",
            type: "uint256"
        }],
        name: "TeamUpdateLimits",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [],
        name: "TeamWallet",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "TeamWithdrawMarketingBNB",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "TeamWithdrawMarketingBNB",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [],
        name: "TeamlimitLiquidityReleaseTo20Percent",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [],
        name: "WhiteListBalanceLimitDivider",
        outputs: [{
            internalType: "uint16",
            name: "",
            type: "uint16"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "_getTotalShares",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "_owner",
            type: "address"
        }, {
            internalType: "address",
            name: "spender",
            type: "address"
        }],
        name: "allowance",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "spender",
            type: "address"
        }, {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "approve",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [],
        name: "balanceLimit",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "account",
            type: "address"
        }],
        name: "balanceOf",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "decimals",
        outputs: [{
            internalType: "uint8",
            name: "",
            type: "uint8"
        }],
        stateMutability: "pure",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "spender",
            type: "address"
        }, {
            internalType: "uint256",
            name: "subtractedValue",
            type: "uint256"
        }],
        name: "decreaseAllowance",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "AddressToCheck",
            type: "address"
        }],
        name: "getAddressSellLockTimeInSeconds",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "getBurnedTokens",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "addr",
            type: "address"
        }],
        name: "getDividents",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "getLimits",
        outputs: [{
            internalType: "uint256",
            name: "balance",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "sell",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "getLiquidityReleaseTimeInSeconds",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "getOwner",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "getSellLockTimeInSeconds",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "getTaxes",
        outputs: [{
            internalType: "uint256",
            name: "burnTax",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "liquidityTax",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "marketingTax",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "buyTax",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "sellTax",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "transferTax",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "AddressToCheck",
            type: "address"
        }],
        name: "getWhitelistedStatus",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "spender",
            type: "address"
        }, {
            internalType: "uint256",
            name: "addedValue",
            type: "uint256"
        }],
        name: "increaseAllowance",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "addr",
            type: "address"
        }],
        name: "isExcludedFromStaking",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "liquidityRelease20Percent",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "manualConversion",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "marketingBalance",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "marketingShare",
        outputs: [{
            internalType: "uint8",
            name: "",
            type: "uint8"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "name",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        stateMutability: "pure",
        type: "function"
    }, {
        inputs: [],
        name: "owner",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "profitPerShare",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [],
        name: "sellLimit",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "sellLockDisabled",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "sellLockTime",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "symbol",
        outputs: [{
            internalType: "string",
            name: "",
            type: "string"
        }],
        stateMutability: "pure",
        type: "function"
    }, {
        inputs: [],
        name: "totalLPBNB",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "totalPayouts",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "totalStakingReward",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "totalSupply",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "tradingEnabled",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "recipient",
            type: "address"
        }, {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "transfer",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "sender",
            type: "address"
        }, {
            internalType: "address",
            name: "recipient",
            type: "address"
        }, {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "transferFrom",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "newOwner",
            type: "address"
        }],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [],
        name: "whiteListTrading",
        outputs: [{
            internalType: "bool",
            name: "",
            type: "bool"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        stateMutability: "payable",
        type: "receive"
    }];
	
	

async function connectWallet() {
    if (window.ethereum) {
        if (56 == parseInt(await window.ethereum.chainId)) try {
            document.getElementById("address").innerHTML = (await window.ethereum.request({
                method: "eth_requestAccounts"
            })).toString()
        } catch (e) {
            console.log(e)
        } else alert("Connect To Binance Chain Mainnet")
    } else alert("Non Binance browser detected. You should consider trying MetaMask Extension!")
}

function myDetails() {
    const e = new ethers.providers.Web3Provider(window.ethereum);
    var t = ETHStakerAdd,
        n = ETHStakerABI,
        a = new ethers.Contract(t, n, e),
        i = new ethers.Contract("0xB59EC5f900043e5Fb44E537497D46DC2C905EAD0", tokenABI, e),
        u = new ethers.Contract("0xB59EC5f900043e5Fb44E537497D46DC2C905EAD0", tokenABI, e);
    (async () => {
        if (window.ethereum && "Connect" != document.getElementById("address").innerHTML) try {
            var e = (await window.ethereum.request({
                    method: "eth_requestAccounts"
                })).toString(),
                t = await a.getDividents(e) / 1e18;
            document.getElementById("earnings").innerHTML = t, document.getElementById("supply").innerHTML = await a.totalSupply(), document.getElementById("burned").innerHTML = await a.getBurnedTokens();
            var n = await i.balanceOf("0xB59EC5f900043e5Fb44E537497D46DC2C905EAD0"),
                p = await u.balanceOf("0xB59EC5f900043e5Fb44E537497D46DC2C905EAD0");
            document.getElementById("daibal").innerHTML = await u.balanceOf(e);
            var s = parseFloat(parseFloat(n / 1e18).toFixed(10) / parseFloat(p / 1e9).toFixed(10)).toFixed(10),
                y = parseFloat(parseFloat(s) + parseFloat(15 * s / 1e3)).toFixed(10),
                o = "";
            await fetch("https://api.smartcontract.ru/gateway/rates_usd.json").then(e => e.json()).then(e => {
                bnbPriceUSD = parseFloat(e.data.bnb), o = parseFloat(y * bnbPriceUSD)
            }), document.getElementById("daiprice").innerHTML = o, document.getElementById("pool").innerHTML = parseFloat(o) * parseFloat(p / 1e9)
        } catch (e) {
            console.log(e)
        } else document.getElementById("earnings").innerHTML = "Connect to Wallet"
    })()
}
async function withdrawETH() {
    const e = new ethers.providers.Web3Provider(window.ethereum);
    var t = ETHStakerAdd,
        n = ETHStakerABI,
        a = new ethers.Contract(t, n, e.getSigner());
    56 == parseInt(await window.ethereum.chainId) && "Connect" != document.getElementById("address").innerHTML ? window.ethereum || window.ethereum.isMetaMask || ethereum && ethereum.isTrust ? await a.ETHWithdraw() : alert("Please connect to Metamask/Trustwallet and switch to Binance Network") : alert("Connect To Binance Chain Mainnet")
}