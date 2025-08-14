use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
    account_info::{AccountInfo, next_account_info},
    entrypoint,
    entrypoint::ProgramResult,
    instruction::{AccountMeta, Instruction},
    msg,
    program::invoke,
    pubkey::{self, Pubkey},
};

entrypoint!(process_instructions);

pub fn process_instructions(
    _program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let mut iter = accounts.iter();
    let data_account = next_account_info(&mut iter)?;
    let cpi_program_id = next_account_info(&mut iter)?;
    let instruction = Instruction {
        program_id: *cpi_program_id.key,
        accounts: vec![AccountMeta {
            pubkey: *data_account.key,
            is_signer: true,
            is_writable: true,
        }],
        data: vec![],
    };

    let res = invoke(&instruction, &[data_account.clone()])?;
    msg!("{:?}", res);

    Ok(())
}
