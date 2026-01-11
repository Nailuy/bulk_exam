export const questions = [
    {
        id: 1,
        question: "What is Bulktrade's target latency?",
        answers: ["20-25ms", "400ms", "1s"],
        correct: 0
    },
    {
        id: 2,
        question: "What validator technology does Bulktrade use?",
        answers: ["Jito", "Bulk-Agave", "Firedancer"],
        correct: 1
    },
    {
        id: 3,
        question: "What is Bulktrade's off-chain database called?",
        answers: ["BigTable", "BulkDB", "SQL"],
        correct: 1
    },
    {
        id: 4,
        question: "What encoding does BulkDB use?",
        answers: ["AES", "Reed-Solomon", "Base64"],
        correct: 1
    },
    {
        id: 5,
        question: "Which market maker is an investor in Bulktrade?",
        answers: ["Alameda", "Wintermute", "Jump"],
        correct: 1
    },
    {
        id: 6,
        question: "Who is the angel investor in Bulktrade?",
        answers: ["Raj", "Toly", "Vitalik"],
        correct: 1
    },
    {
        id: 7,
        question: "What solves capital efficiency in Bulktrade?",
        answers: ["Unified Margin", "Low Fees", "KYC"],
        correct: 0
    },
    {
        id: 8,
        question: "Which lending protocol is integrated with Bulktrade?",
        answers: ["Marginfi", "Solend", "Kamino"],
        correct: 2
    },
    {
        id: 9,
        question: "What is Bulktrade's matching engine called?",
        answers: ["Bulk-Tile", "Serum", "OpenBook"],
        correct: 0
    },
    {
        id: 10,
        question: "What is the standard Solana latency?",
        answers: ["400ms", "100ms", "10s"],
        correct: 0
    },
    {
        id: 11,
        question: "What login technology does Bulktrade use?",
        answers: ["Magic Link", "Passkeys/WebAuthn", "Ledger"],
        correct: 1
    },
    {
        id: 12,
        question: "What type of custody does Bulktrade offer?",
        answers: ["Custodial", "Non-Custodial", "Hybrid"],
        correct: 1
    },
    {
        id: 13,
        question: "Which competitor uses JIT liquidity?",
        answers: ["Zeta", "Jupiter", "Drift"],
        correct: 2
    },
    {
        id: 14,
        question: "What trading model does Bulktrade use?",
        answers: ["CLOB", "AMM", "RFQ"],
        correct: 0
    },
    {
        id: 15,
        question: "What compression method does Bulktrade use?",
        answers: ["Zip", "Reed-Solomon/Gzip", "Rar"],
        correct: 1
    },
    {
        id: 16,
        question: "How much did Bulktrade raise in the seed round?",
        answers: ["$2M", "$8M", "$15M"],
        correct: 1
    },
    {
        id: 17,
        question: "What is Bulktrade's vision slogan?",
        answers: ["Just Build", "One Exchange, Infinite Markets", "Speed is King"],
        correct: 1
    },
    {
        id: 18,
        question: "How does Bulktrade handle gas fees?",
        answers: ["Yes", "Gasless/Relay", "Deposit only"],
        correct: 1
    },
    {
        id: 19,
        question: "Who is the lead VC investor?",
        answers: ["a16z", "Paradigm", "Robot Ventures"],
        correct: 2
    },
    {
        id: 20,
        question: "What is the main benefit of HFT on Bulktrade?",
        answers: ["UI", "Deterministic Execution", "APY"],
        correct: 1
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
