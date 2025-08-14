use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    pubkey::Pubkey,
};

entrypoint!(process_instructions);

#[derive(BorshDeserialize, BorshSerialize)]
struct OnChainData {
    num: u64,
}

// #[derive(BorshDeserialize,BorshSerialize)]

pub fn process_instructions(
    _program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    // msg!("Hello from Solana!");
    let mut account_iter = accounts.iter();
    let account = next_account_info(&mut account_iter)?;
    let mut on_chain_data = OnChainData::try_from_slice(&account.data.borrow())?;
    msg!("num: {}", on_chain_data.num);
    if on_chain_data.num == 0 {
        on_chain_data.num = 1;
    } else {
        on_chain_data.num += 1;
    }
    on_chain_data.serialize(&mut &mut account.data.borrow_mut()[..])?;
    Ok(())
}
