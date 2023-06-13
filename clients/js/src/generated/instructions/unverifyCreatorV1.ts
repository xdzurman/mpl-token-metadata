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
import { addAccountMeta, addObjectProperty } from '../shared';

// Accounts.
export type UnverifyCreatorV1InstructionAccounts = {
  /** Creator to verify, collection (or metadata if parent burned) update authority or delegate */
  authority?: Signer;
  /** Delegate record PDA */
  delegateRecord?: PublicKey | Pda;
  /** Metadata account */
  metadata: PublicKey | Pda;
  /** Mint of the Collection */
  collectionMint?: PublicKey | Pda;
  /** Metadata Account of the Collection */
  collectionMetadata?: PublicKey | Pda;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey | Pda;
};

// Data.
export type UnverifyCreatorV1InstructionData = {
  discriminator: number;
  unverifyCreatorV1Discriminator: number;
};

export type UnverifyCreatorV1InstructionDataArgs = {};

export function getUnverifyCreatorV1InstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  UnverifyCreatorV1InstructionDataArgs,
  UnverifyCreatorV1InstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    UnverifyCreatorV1InstructionDataArgs,
    any,
    UnverifyCreatorV1InstructionData
  >(
    s.struct<UnverifyCreatorV1InstructionData>(
      [
        ['discriminator', s.u8()],
        ['unverifyCreatorV1Discriminator', s.u8()],
      ],
      { description: 'UnverifyCreatorV1InstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: 53,
      unverifyCreatorV1Discriminator: 0,
    })
  ) as Serializer<
    UnverifyCreatorV1InstructionDataArgs,
    UnverifyCreatorV1InstructionData
  >;
}

// Instruction.
export function unverifyCreatorV1(
  context: Pick<Context, 'serializer' | 'programs' | 'identity'>,
  input: UnverifyCreatorV1InstructionAccounts
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
    metadata: [input.metadata, true] as const,
  };
  addObjectProperty(
    resolvedAccounts,
    'authority',
    input.authority
      ? ([input.authority, false] as const)
      : ([context.identity, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'delegateRecord',
    input.delegateRecord
      ? ([input.delegateRecord, false] as const)
      : ([programId, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'collectionMint',
    input.collectionMint
      ? ([input.collectionMint, false] as const)
      : ([programId, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'collectionMetadata',
    input.collectionMetadata
      ? ([input.collectionMetadata, true] as const)
      : ([programId, false] as const)
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
  addObjectProperty(
    resolvedAccounts,
    'sysvarInstructions',
    input.sysvarInstructions
      ? ([input.sysvarInstructions, false] as const)
      : ([
          publicKey('Sysvar1nstructions1111111111111111111111111'),
          false,
        ] as const)
  );

  addAccountMeta(keys, signers, resolvedAccounts.authority, false);
  addAccountMeta(keys, signers, resolvedAccounts.delegateRecord, false);
  addAccountMeta(keys, signers, resolvedAccounts.metadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.collectionMint, false);
  addAccountMeta(keys, signers, resolvedAccounts.collectionMetadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.systemProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.sysvarInstructions, false);

  // Data.
  const data = getUnverifyCreatorV1InstructionDataSerializer(context).serialize(
    {}
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
