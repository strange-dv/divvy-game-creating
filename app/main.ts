import * as anchor from "@project-serum/anchor";
import { IDL } from "./idl";


// admin; should not be changed
const payerKeypair = anchor.web3.Keypair.fromSecretKey(
    Uint8Array.from(
        [150,47,122,142,82,181,194,204,180,175,89,103,197,205,183,197,250,69,91,22,248,10,86,92,118,73,110,5,249,16,64,182,185,241,74,235,178,67,160,127,4,168,154,115,61,33,247,168,170,64,97,228,139,110,30,96,43,116,2,38,117,193,1,17]
    )
);
                // string with number inside
const createGameAccount = async (
        gameBufferRelayer: anchor.web3.PublicKey,
        game_id: string,
        sport_id: string,
        max_liquidity: number,
        participant_a_id: string,
        participant_b_id: string,
        participant_a_name: string,
        participant_b_name: string
    ) => {
    const provider = new anchor.AnchorProvider(
        // https://api.mainnet.solana.com/  for mainnet
        new anchor.web3.Connection("https://api.devnet.solana.com", {
            commitment: "confirmed",
        }),
        new anchor.Wallet(payerKeypair),
        {
            commitment: "confirmed",
        }
    );

    const programId = new anchor.web3.PublicKey(IDL["metadata"]["address"]);

    const program = new anchor.Program(IDL as  anchor.Idl, programId, provider);

    const [state, ] =
        await anchor.web3.PublicKey.findProgramAddress(
            [Buffer.from("sports_book")],
            program.programId
        );

    const [game, ] = await anchor.web3.PublicKey.findProgramAddress(
        [
            anchor.utils.bytes.utf8.encode("game"),
            anchor.utils.bytes.utf8.encode(game_id)
        ],
        program.programId
    );

    await program.methods
        .initializeGame(
            new anchor.BN(game_id),
            new anchor.BN(sport_id),
            new anchor.BN(max_liquidity),
            new anchor.BN(participant_a_id),
            new anchor.BN(participant_b_id),
            participant_a_name,
            participant_b_name,
        )
        .accounts({
            admin: payerKeypair.publicKey,
            state: state,
            event: game,
            eventBufferRelayer: gameBufferRelayer,
            systemProgram: anchor.web3.SystemProgram.programId,
        })
        .signers([payerKeypair])
        .rpc(provider.connection)

    console.log("Game: ", game.toString())
    console.log("Game: ", await program.account.divvyEvent.fetch(game))
}

// EXAMPLE
const game_id = "11111111111";
const sport_id = "11111111";
const max_liquidity = 100;
const participant_a_id = "11111111";
const participant_b_id = "11111111";
const participant_a_name = "participant_a_name";
const participant_b_name = "participant_b_name";
createGameAccount(
    new anchor.web3.PublicKey("CVyArpPrMec1Z6dGVkCnNs8NeGDXioABCVs2QSRSSGZb"),
    game_id,
    sport_id,
    max_liquidity,
    participant_a_id,
    participant_b_id,
    participant_a_name,
    participant_b_name
).then( () => {
    console.log("Successfully created!");
})
