export const questions = [
    // Week 1
    {
        id: 1,
        question: "What is the primary mission of Bulktrade?",
        answers: ["To launch a memecoin platform", "To replace Uniswap", "To bring CEX-level performance to DeFi"],
        correct: 2
    },
    {
        id: 2,
        question: "How much funding did Bulktrade raise in its Seed Round?",
        answers: ["$12 Million", "$8 Million", "$4 Million"],
        correct: 1
    },
    {
        id: 3,
        question: "Which major market maker is a strategic backer of Bulktrade?",
        answers: ["Tower Research", "Jump Trading", "Wintermute"],
        correct: 2
    },
    {
        id: 4,
        question: "Who is the famous Solana co-founder investing in Bulktrade?",
        answers: ["Raj Gokal", "Anatoly Yakovenko", "Greg Fitzgerald"],
        correct: 1
    },
    {
        id: 5,
        question: "What is the main 'Solana' limitation Bulktrade aims to solve?",
        answers: ["High Gas Fees", "Latency & Jitter", "Network outages"],
        correct: 1
    },
    {
        id: 6,
        question: "Which Venture Capital firm led the seed round?",
        answers: ["Multicoin Capital", "a16z", "6th Man Ventures (6MV)"],
        correct: 2
    },
    {
        id: 7,
        question: "Bulktrade is built to compete primarily with...",
        answers: ["Other AMMs", "Centralized Exchanges (CEXs)", "NFT Marketplaces"],
        correct: 1
    },
    {
        id: 8,
        question: "What market sector does Bulktrade focus on?",
        answers: ["Spot only", "Real World Assets", "Perpetuals & Derivatives"],
        correct: 2
    },
    {
        id: 9,
        question: "Which investor is known for deep-tech & infrastructure focus?",
        answers: ["Dragonfly", "Paradigm", "Robot Ventures"],
        correct: 2
    },
    {
        id: 10,
        question: "What is the core philosophy of Bulktrade's design?",
        answers: ["Retail-first", "Mobile-first", "Institution-first"],
        correct: 2
    },
    {
        id: 11,
        question: "In the 'Liquidity Trilemma', what does Bulktrade prioritize alongside speed?",
        answers: ["Anonymity", "Custody (Self-custody)", "Fiat on-ramps"],
        correct: 1
    },
    {
        id: 12,
        question: "What makes Bulktrade different from Uniswap?",
        answers: ["It uses an Orderbook (CLOB)", "It uses a Bonding Curve", "It has no fees"],
        correct: 0
    },
    {
        id: 13,
        question: "Which phrase best describes Bulktrade's target audience?",
        answers: ["Casual swappers", "High-Frequency Traders (HFT)", "Long-term holders"],
        correct: 1
    },
    {
        id: 14,
        question: "Bulktrade operates on which Layer 1 blockchain?",
        answers: ["Ethereum", "Monad", "Solana"],
        correct: 2
    },
    {
        id: 15,
        question: "What does 'CLOB' stand for?",
        answers: ["Crypto Limit Order Base", "Central Limit Order Book", "Central Liquidity On Block"],
        correct: 1
    },
    {
        id: 16,
        question: "Who is NOT listed as an investor in the provided analysis?",
        answers: ["Binance Labs", "Floor", "Chunk"],
        correct: 0
    },
    {
        id: 17,
        question: "The project is described as an evolution from...",
        answers: ["DeFi 1.0 (AMMs)", "DeFi 2.0 (Yield)", "NFTFi"],
        correct: 0
    },
    {
        id: 18,
        question: "Bulktrade's matching engine is located...",
        answers: ["Off-chain / Validator Sidecar", "On a centralized AWS server", "In a smart contract"],
        correct: 0
    },
    {
        id: 19,
        question: "What kind of data does Bulktrade aim to provide to traders?",
        answers: ["Delayed data", "Real-time, tick-by-tick", "Daily averages"],
        correct: 1
    },
    {
        id: 20,
        question: "The architecture of Bulktrade is best described as...",
        answers: ["Monolithic", "Hybrid (Off-chain match, On-chain settle)", "Fully On-chain"],
        correct: 1
    },

    // Week 2
    {
        id: 21,
        question: "What is the name of the custom validator client used by Bulktrade?",
        answers: ["Bulk-Firedancer", "Bulk-Agave", "Bulk-Jito"],
        correct: 1
    },
    {
        id: 22,
        question: "What is the approximate latency achieved by Bulk-Agave?",
        answers: ["100ms", "~20-25ms", "400ms"],
        correct: 1
    },
    {
        id: 23,
        question: "What is the standard block time of Solana?",
        answers: ["~1s", "~12s", "~400ms"],
        correct: 2
    },
    {
        id: 24,
        question: "Bulktrade bypasses which component of the standard validator?",
        answers: ["The Archive", "The Scheduler / Banking Stage", "The Gossip Network"],
        correct: 1
    },
    {
        id: 25,
        question: "Where is the Matching Engine physically located in Bulktrade's architecture?",
        answers: ["On the Client side", "Inside the Validator (Sidecar)", "In the Mempool"],
        correct: 1
    },
    {
        id: 26,
        question: "What does 'Zero Jitter' mean for a trader?",
        answers: ["No transaction fees", "No slippage", "Predictable execution time"],
        correct: 2
    },
    {
        id: 27,
        question: "Does Bulktrade use the standard Solana mempool for matching?",
        answers: ["No, it bypasses it", "Yes", "Sometimes"],
        correct: 0
    },
    {
        id: 28,
        question: "What ensures the security of user funds in this hybrid model?",
        answers: ["Centralized Custody", "On-chain Settlement", "Insurance Fund"],
        correct: 1
    },
    {
        id: 29,
        question: "The 'Validator Sidecar' approach is comparable to...",
        answers: ["Using a VPN", "Using a faster router", "A direct fiber optic line to the exchange"],
        correct: 2
    },
    {
        id: 30,
        question: "What database technology handles the orderbook state?",
        answers: ["PostgreSQL", "MongoDB", "BulkDB"],
        correct: 2
    },
    {
        id: 31,
        question: "Is the Matching Engine logic written in Solidity?",
        answers: ["No, it's Python", "No, likely Rust/C++", "Yes"],
        correct: 1
    },
    {
        id: 32,
        question: "How does Bulktrade achieve 'Atomic' execution?",
        answers: ["It doesn't", "Via Smart Contracts", "Through the Validator integration"],
        correct: 2
    },
    {
        id: 33,
        question: "What happens to a trade if the validator crashes?",
        answers: ["State is recovered from on-chain/snapshot", "Funds are lost", "Trade is reverted"],
        correct: 2
    },
    {
        id: 34,
        question: "Bulk-Agave is a fork of...",
        answers: ["Jito Client", "Firedancer", "Solana Labs Client (Agave)"],
        correct: 2
    },
    {
        id: 35,
        question: "The term 'HFT' stands for...",
        answers: ["High Fidelity Trading", "Huge Financial Transaction", "High Frequency Trading"],
        correct: 2
    },
    {
        id: 36,
        question: "Why is standard Solana insufficient for true HFT?",
        answers: ["Fees are too high", "Block times are too slow/variable", "Not enough liquidity"],
        correct: 1
    },
    {
        id: 37,
        question: "What is the primary benefit of the 'Sidecar' architecture?",
        answers: ["Latency Determinism", "Lower Fees", "Better UI"],
        correct: 0
    },
    {
        id: 38,
        question: "Does Bulktrade rely on external Keepers for order matching?",
        answers: ["Only for liquidations", "No, matching is automated in the engine", "Yes"],
        correct: 1
    },
    {
        id: 39,
        question: "How are trades finalized?",
        answers: ["Synchronously on-chain", "Asynchronously", "Via email"],
        correct: 0
    },
    {
        id: 40,
        question: "The 'Bulk-Agave' client is optimized for...",
        answers: ["Storage", "Compute/Execution Speed", "Decentralization"],
        correct: 1
    },

    // Week 3
    {
        id: 41,
        question: "What authentication method does Bulktrade prioritize?",
        answers: ["Email & Password", "Passkeys / WebAuthn", "Seed Phrase only"],
        correct: 1
    },
    {
        id: 42,
        question: "What is 'Unified Margin'?",
        answers: ["Fixed margin rate", "Merging two accounts", "Using multiple assets as collateral for one position"],
        correct: 2
    },
    {
        id: 43,
        question: "Does Bulktrade allow 'Gasless' trading?",
        answers: ["Yes, via Relayers/Paymasters", "Only for VIPs", "No"],
        correct: 0
    },
    {
        id: 44,
        question: "Which type of sub-accounts does Bulktrade support?",
        answers: ["Isolated Sub-accounts", "None", "Family accounts"],
        correct: 0
    },
    {
        id: 45,
        question: "Can users trade using funds directly from a cold wallet?",
        answers: ["Only via Ledger Live", "No, must deposit to centralized wallet", "Yes, via non-custodial smart contracts"],
        correct: 2
    },
    {
        id: 46,
        question: "What makes the Bulktrade UX similar to a CEX?",
        answers: ["Instant Confirmations & No Popups", "KYC Requirements", "Centralized control"],
        correct: 0
    },
    {
        id: 47,
        question: "Bulktrade's API is designed to be compatible with...",
        answers: ["GraphQL only", "Only Solana Web3.js", "CCXT / Standard Exchange APIs"],
        correct: 2
    },
    {
        id: 48,
        question: "What is the mascot of Bulktrade?",
        answers: ["A Robot", "A Dog", "A Yeti"],
        correct: 2
    },
    {
        id: 49,
        question: "Which lending protocol integration allows for interest-bearing collateral?",
        answers: ["Compound", "Kamino / Marginfi", "Aave"],
        correct: 1
    },
    {
        id: 50,
        question: "Does Bulktrade have a native mobile app planned?",
        answers: ["Yes, PWA/Native support", "No", "Desktop only"],
        correct: 0
    },
    {
        id: 51,
        question: "What happens to the 'spread' on Bulktrade compared to AMMs?",
        answers: ["It is tighter due to Market Makers", "It is fixed", "It is wider"],
        correct: 0
    },
    {
        id: 52,
        question: "Can you place 'Limit Orders' on Bulktrade?",
        answers: ["Yes, native Limit Orders", "No, only Market", "Only via 3rd party"],
        correct: 0
    },
    {
        id: 53,
        question: "What represents the 'User Interface' layer?",
        answers: ["The Website/Frontend", "Bulk-Agave", "BulkDB"],
        correct: 0
    },
    {
        id: 54,
        question: "How does Bulktrade handle liquidations?",
        answers: ["Manual review", "Real-time via the matching engine", "Slowly"],
        correct: 1
    },
    {
        id: 55,
        question: "Is KYC (Know Your Customer) required for the DEX?",
        answers: ["Yes", "No, it's permissionless", "Only for US citizens"],
        correct: 1
    },
    {
        id: 56,
        question: "What key feature attracts institutional capital?",
        answers: ["Funny memes", "API connectivity & Deep Liquidity", "Airdrops"],
        correct: 1
    },
    {
        id: 57,
        question: "What is the primary visual theme of the platform?",
        answers: ["Light Mode / Pink", "Rainbow", "Dark Mode / Terminal Style"],
        correct: 2
    },
    {
        id: 58,
        question: "Does Bulktrade support 'Cross-Margining'?",
        answers: ["Yes", "No", "Maybe"],
        correct: 0
    },
    {
        id: 59,
        question: "Users retain full control of their keys via...",
        answers: ["MPC or Ledger", "Email recovery", "Admin keys"],
        correct: 0
    },
    {
        id: 60,
        question: "The onboarding process aims to eliminate...",
        answers: ["Seed phrase friction", "Profit", "Security"],
        correct: 0
    },

    // Week 4
    {
        id: 61,
        question: "How does Bulktrade differ from Drift Protocol?",
        answers: ["Drift is faster", "Drift uses JIT Auctions, Bulk is Pre-match", "Drift is a CEX"],
        correct: 1
    },
    {
        id: 62,
        question: "What is 'JIT Liquidity' (used by competitors)?",
        answers: ["Just In Transaction", "Just In Time", "Jump In Trading"],
        correct: 1
    },
    {
        id: 63,
        question: "Why is JIT liquidity considered a bottleneck for HFT?",
        answers: ["It introduces auction latency (~slot time)", "It is illegal", "It is too fast"],
        correct: 0
    },
    {
        id: 64,
        question: "What is Bulktrade's advantage over Zeta Markets?",
        answers: ["More tokens", "Architecture (Validator Integration)", "Better colors"],
        correct: 1
    },
    {
        id: 65,
        question: "What data compression algorithm is mentioned in technical contexts for BulkDB?",
        answers: ["Zstd / Reed-Solomon (conceptually)", "JPEG", "MP3"],
        correct: 0
    },
    {
        id: 66,
        question: "The 'Validator Sidecar' connects to the validator via...",
        answers: ["Bluetooth", "IPC (Inter-Process Communication) / Shared Memory", "Internet"],
        correct: 1
    },
    {
        id: 67,
        question: "What prevents MEV (Maximum Extractable Value) on Bulktrade?",
        answers: ["High fees", "The secluded matching environment / No public mempool", "Nothing"],
        correct: 1
    },
    {
        id: 68,
        question: "In the 'Unfair Advantage' thesis, what is the 'Fiber Optic' analogy?",
        answers: ["Starlink", "Solana's speed", "Bulk-Agave's direct execution"],
        correct: 2
    },
    {
        id: 69,
        question: "What represents the 'Settlement Layer'?",
        answers: ["BulkDB", "AWS", "Solana Mainnet"],
        correct: 2
    },
    {
        id: 70,
        question: "Is BulkDB a blockchain?",
        answers: ["No, it's an optimized Ledger/Database", "It is a token", "Yes"],
        correct: 0
    },
    {
        id: 71,
        question: "Which metric is most critical for Market Makers?",
        answers: ["TVL", "Round-Trip Time (RTT) / Latency", "User count"],
        correct: 1
    },
    {
        id: 72,
        question: "Bulktrade's throughput is limited primarily by...",
        answers: ["Solana's block limit", "Ethereum gas", "Hardware/Bandwidth"],
        correct: 2
    },
    {
        id: 73,
        question: "What is 'Optimistic Confirmation' in the UI?",
        answers: ["Guessing the trade worked", "Showing the result before on-chain finality based on engine ack", "Lying to the user"],
        correct: 1
    },
    {
        id: 74,
        question: "Who provides the 'Oracle' data for the platform?",
        answers: ["Pyth / Switchboard (Likely)", "Google", "Yahoo Finance"],
        correct: 0
    },
    {
        id: 75,
        question: "The 'Orderbook' is maintained...",
        answers: ["In RAM (Memory)", "On Disk", "On Paper"],
        correct: 0
    },
    {
        id: 76,
        question: "What distinguishes Bulktrade from Phoenix DEX?",
        answers: ["Phoenix is slower", "They are identical", "Phoenix is fully on-chain/limited by compute, Bulk is hybrid sidecar"],
        correct: 2
    },
    {
        id: 77,
        question: "Does Bulktrade support 'Post-Only' orders?",
        answers: ["Only for retail", "Yes (Standard for MMs)", "No"],
        correct: 1
    },
    {
        id: 78,
        question: "What is the 'Soft Finality' time?",
        answers: ["~400ms", "~20ms (Engine Ack)", "1 minute"],
        correct: 1
    },
    {
        id: 79,
        question: "Which component handles the 'Risk Engine'?",
        answers: ["The Validator Sidecar Logic", "The UI", "The Wallet"],
        correct: 0
    },
    {
        id: 80,
        question: "The ultimate goal of Bulktrade's infrastructure is to become...",
        answers: ["The liquidity layer for all of Solana DeFi", "A bank", "A niche app"],
        correct: 0
    }
];

export const roles = [
    {
        minScore: 0,
        maxScore: 5,
        name: "Unverified Entity",
        color: "#EF4A3C",
        mascot: "clownyeti.png"
    },
    {
        minScore: 6,
        maxScore: 10,
        name: "Mempool Victim",
        color: "#FFAA00",
        mascot: "macbulk.png"
    },
    {
        minScore: 11,
        maxScore: 15,
        name: "CLOB Enjoyer",
        color: "#00B481",
        mascot: "selfieyeti.png"
    },
    {
        minScore: 16,
        maxScore: 19,
        name: "Liquidity Architect",
        color: "#FFB547",
        mascot: "redcandles.png"
    },
    {
        minScore: 20,
        maxScore: 20,
        name: "Bulk-Agave God",
        color: "#FFB547",
        mascot: "bulkiebulked.png",
        glitch: true
    }
];

export const getRoleByScore = (score) => {
    return roles.find(role => score >= role.minScore && score <= role.maxScore) || roles[0];
};
