/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  AccountMeta,
  Context,
  Pda,
  PublicKey,
  Serializer,
  Signer,
  TransactionBuilder,
  mapSerializer,
  publicKey,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import { findMetadataPda } from '../accounts';
import { addAccountMeta, addObjectProperty } from '../shared';

// Accounts.
export type ApproveUseAuthorityInstructionAccounts = {
  /** Use Authority Record PDA */
  useAuthorityRecord: PublicKey | Pda;
  /** Owner */
  owner: Signer;
  /** Payer */
  payer?: Signer;
  /** A Use Authority */
  user: PublicKey | Pda;
  /** Owned Token Account Of Mint */
  ownerTokenAccount: PublicKey | Pda;
  /** Metadata account */
  metadata?: PublicKey | Pda;
  /** Mint of Metadata */
  mint: PublicKey | Pda;
  /** Program As Signer (Burner) */
  burner: PublicKey | Pda;
  /** Token program */
  tokenProgram?: PublicKey | Pda;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** Rent info */
  rent?: PublicKey | Pda;
};

// Data.
export type ApproveUseAuthorityInstructionData = {
  discriminator: number;
  numberOfUses: bigint;
};

export type ApproveUseAuthorityInstructionDataArgs = {
  numberOfUses: number | bigint;
};

export function getApproveUseAuthorityInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  ApproveUseAuthorityInstructionDataArgs,
  ApproveUseAuthorityInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    ApproveUseAuthorityInstructionDataArgs,
    any,
    ApproveUseAuthorityInstructionData
  >(
    s.struct<ApproveUseAuthorityInstructionData>(
      [
        ['discriminator', s.u8()],
        ['numberOfUses', s.u64()],
      ],
      { description: 'ApproveUseAuthorityInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 20 })
  ) as Serializer<
    ApproveUseAuthorityInstructionDataArgs,
    ApproveUseAuthorityInstructionData
  >;
}

// Args.
export type ApproveUseAuthorityInstructionArgs =
  ApproveUseAuthorityInstructionDataArgs;

// Instruction.
export function approveUseAuthority(
  context: Pick<Context, 'serializer' | 'programs' | 'eddsa' | 'payer'>,
  input: ApproveUseAuthorityInstructionAccounts &
    ApproveUseAuthorityInstructionArgs
): TransactionBuilder {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'mplTokenMetadata',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
  );

  // Resolved inputs.
  const resolvedAccounts = {
    useAuthorityRecord: [input.useAuthorityRecord, true] as const,
    owner: [input.owner, true] as const,
    user: [input.user, false] as const,
    ownerTokenAccount: [input.ownerTokenAccount, true] as const,
    mint: [input.mint, false] as const,
    burner: [input.burner, false] as const,
    rent: [input.rent, false] as const,
  };
  const resolvingArgs = {};
  addObjectProperty(
    resolvedAccounts,
    'payer',
    input.payer
      ? ([input.payer, true] as const)
      : ([context.payer, true] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'metadata',
    input.metadata
      ? ([input.metadata, false] as const)
      : ([
          findMetadataPda(context, { mint: publicKey(input.mint, false) }),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'tokenProgram',
    input.tokenProgram
      ? ([input.tokenProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'splToken',
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
          ),
          false,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'systemProgram',
    input.systemProgram
      ? ([input.systemProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'splSystem',
            '11111111111111111111111111111111'
          ),
          false,
        ] as const)
  );
  const resolvedArgs = { ...input, ...resolvingArgs };

  addAccountMeta(keys, signers, resolvedAccounts.useAuthorityRecord, false);
  addAccountMeta(keys, signers, resolvedAccounts.owner, false);
  addAccountMeta(keys, signers, resolvedAccounts.payer, false);
  addAccountMeta(keys, signers, resolvedAccounts.user, false);
  addAccountMeta(keys, signers, resolvedAccounts.ownerTokenAccount, false);
  addAccountMeta(keys, signers, resolvedAccounts.metadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.mint, false);
  addAccountMeta(keys, signers, resolvedAccounts.burner, false);
  addAccountMeta(keys, signers, resolvedAccounts.tokenProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.systemProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.rent, true);

  // Data.
  const data =
    getApproveUseAuthorityInstructionDataSerializer(context).serialize(
      resolvedArgs
    );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
