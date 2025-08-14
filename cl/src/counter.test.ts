// import { LiteSVM } from "litesvm";
// import {
// 	LAMPORTS_PER_SOL,
// 	PublicKey,
// 	Transaction,
// 	SystemProgram,
// 	Keypair,
// 	TransactionInstruction,
// } from "@solana/web3.js";

// describe('"testing contract"', () => { 

// test("init", async () => {
// 	const svm = new LiteSVM();
// 	const program_pubkey = Keypair.generate().publicKey;
// 	svm.addProgramFromFile(program_pubkey, "./basic.so");

// 	const payer = Keypair.generate();
// 	const publicKey = payer.publicKey;
// 	const lamports = 2 * LAMPORTS_PER_SOL;

// 	svm.airdrop(publicKey, BigInt(lamports));
// 	console.log("Payer balance:", svm.getBalance(publicKey));

// 	const data_account = Keypair.generate();

// 	const rentExemption = Number(svm.minimumBalanceForRentExemption(BigInt(8))); 
// 	const ixs = [
// 		SystemProgram.createAccount({
// 			fromPubkey: publicKey,
// 			newAccountPubkey: data_account.publicKey,
// 			lamports: rentExemption,
// 			space: 8,
// 			programId: program_pubkey,
// 		}),
// 	];

// 	const lastBlockHash = svm.latestBlockhash();
// 	const txn = new Transaction();
// 	txn.add(...ixs);
// 	txn.recentBlockhash = lastBlockHash;
// 	txn.feePayer = payer.publicKey;
// 	txn.sign(payer, data_account);

// 	svm.sendTransaction(txn);

// 	console.log("Data account balance:", svm.getBalance(data_account.publicKey));

// 	const contractIxs = new TransactionInstruction({
// 		keys: [
// 			{ pubkey: data_account.publicKey, isSigner: true, isWritable: true },
// 		],
// 		programId: program_pubkey,
// 		data: Buffer.from(""), 
// 	});
// 	function add(){
// 		const tx2 = new Transaction().add(contractIxs);
// 		const recentBlockhash2 = svm.latestBlockhash();
// 		tx2.recentBlockhash = recentBlockhash2;
// 		tx2.feePayer = payer.publicKey;
// 		tx2.sign(payer, data_account);
// 		svm.sendTransaction(tx2);
// 		svm.expireBlockhash();
// 	}
// 	add();
// 	add();
// 	add();
// 	add();
// 	const updatedDataAccount = svm.getAccount(data_account.publicKey);
// 	console.log("Updated data account:", updatedDataAccount);

	
// 	expect(updatedDataAccount?.data[0]).toBe(4);
// });

// });