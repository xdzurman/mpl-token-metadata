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
import { findMasterEditionPda } from '../accounts';
import { addAccountMeta, addObjectProperty } from '../shared';

// Accounts.
export type ThawDelegatedAccountInstructionAccounts = {
  /** Delegate */
  delegate: Signer;
  /** Token account to thaw */
  tokenAccount: PublicKey | Pda;
  /** Edition */
  edition?: PublicKey | Pda;
  /** Token mint */
  mint: PublicKey | Pda;
  /** Token Program */
  tokenProgram?: PublicKey | Pda;
};

// Data.
export type ThawDelegatedAccountInstructionData = { discriminator: number };

export type ThawDelegatedAccountInstructionDataArgs = {};

export function getThawDelegatedAccountInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  ThawDelegatedAccountInstructionDataArgs,
  ThawDelegatedAccountInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    ThawDelegatedAccountInstructionDataArgs,
    any,
    ThawDelegatedAccountInstructionData
  >(
    s.struct<ThawDelegatedAccountInstructionData>([['discriminator', s.u8()]], {
      description: 'ThawDelegatedAccountInstructionData',
    }),
    (value) => ({ ...value, discriminator: 27 })
  ) as Serializer<
    ThawDelegatedAccountInstructionDataArgs,
    ThawDelegatedAccountInstructionData
  >;
}

// Instruction.
export function thawDelegatedAccount(
  context: Pick<Context, 'serializer' | 'programs' | 'eddsa'>,
  input: ThawDelegatedAccountInstructionAccounts
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
    delegate: [input.delegate, true] as const,
    tokenAccount: [input.tokenAccount, true] as const,
    mint: [input.mint, false] as const,
  };
  addObjectProperty(
    resolvedAccounts,
    'edition',
    input.edition
      ? ([input.edition, false] as const)
      : ([
          findMasterEditionPda(context, { mint: publicKey(input.mint, false) }),
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

  addAccountMeta(keys, signers, resolvedAccounts.delegate, false);
  addAccountMeta(keys, signers, resolvedAccounts.tokenAccount, false);
  addAccountMeta(keys, signers, resolvedAccounts.edition, false);
  addAccountMeta(keys, signers, resolvedAccounts.mint, false);
  addAccountMeta(keys, signers, resolvedAccounts.tokenProgram, false);

  // Data.
  const data = getThawDelegatedAccountInstructionDataSerializer(
    context
  ).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
