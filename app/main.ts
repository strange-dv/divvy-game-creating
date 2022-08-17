import * as anchor from "@project-serum/anchor";
import { IDL } from "./idl";


// admin; should not be changed
const payerKeypair = anchor.web3.Keypair.fromSecretKey(
    Uint8Array.from(
        [150,47,122,142,82,181,194,204,180,175,89,103,197,205,183,197,250,69,91,22,248,10,86,92,118,73,110,5,249,16,64,182,185,241,74,235,178,67,160,127,4,168,154,115,61,33,247,168,170,64,97,228,139,110,30,96,43,116,2,38,117,193,1,17]
    )
);
                // string with number inside
const main = async (game_id: string) => {
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
        .initializeGame(new anchor.BN(game_id))
        .accounts({
            admin: payerKeypair.publicKey,
            state: state,
            game: game,
            systemProgram: anchor.web3.SystemProgram.programId,
        })
        .signers([payerKeypair])
        .rpc(provider.connection)

    console.log("Game: ", game.toString())
}


main("11111111111").then( () => {
    console.log("Successfully created!");
})
