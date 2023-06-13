/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { findAssociatedTokenPda } from '@metaplex-foundation/mpl-toolbox';
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
import {
  resolveBurnMasterEdition,
  resolveMasterEdition,
  resolveTokenRecord,
} from '../../hooked';
import { findMetadataPda } from '../accounts';
import { PickPartial, addAccountMeta, addObjectProperty } from '../shared';
import { TokenStandardArgs } from '../types';

// Accounts.
export type BurnV1InstructionAccounts = {
  /** Asset owner or Utility delegate */
  authority?: Signer;
  /** Metadata of the Collection */
  collectionMetadata?: PublicKey | Pda;
  /** Metadata (pda of ['metadata', program id, mint id]) */
  metadata?: PublicKey | Pda;
  /** Edition of the asset */
  edition?: PublicKey | Pda;
  /** Mint of token asset */
  mint: PublicKey | Pda;
  /** Token account to close */
  token?: PublicKey | Pda;
  /** Master edition account */
  masterEdition?: PublicKey | Pda;
  /** Master edition mint of the asset */
  masterEditionMint?: PublicKey | Pda;
  /** Master edition token account */
  masterEditionToken?: PublicKey | Pda;
  /** Edition marker account */
  editionMarker?: PublicKey | Pda;
  /** Token record account */
  tokenRecord?: PublicKey | Pda;
  /** System program */
  systemProgram?: PublicKey | Pda;
  /** Instructions sysvar account */
  sysvarInstructions?: PublicKey | Pda;
  /** SPL Token Program */
  splTokenProgram?: PublicKey | Pda;
};

// Data.
export type BurnV1InstructionData = {
  discriminator: number;
  burnV1Discriminator: number;
  amount: bigint;
};

export type BurnV1InstructionDataArgs = { amount?: number | bigint };

export function getBurnV1InstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<BurnV1InstructionDataArgs, BurnV1InstructionData> {
  const s = context.serializer;
  return mapSerializer<BurnV1InstructionDataArgs, any, BurnV1InstructionData>(
    s.struct<BurnV1InstructionData>(
      [
        ['discriminator', s.u8()],
        ['burnV1Discriminator', s.u8()],
        ['amount', s.u64()],
      ],
      { description: 'BurnV1InstructionData' }
    ),
    (value) => ({
      ...value,
      discriminator: 41,
      burnV1Discriminator: 0,
      amount: value.amount ?? 1,
    })
  ) as Serializer<BurnV1InstructionDataArgs, BurnV1InstructionData>;
}

// Extra Args.
export type BurnV1InstructionExtraArgs = {
  tokenOwner: PublicKey;
  tokenStandard: TokenStandardArgs;
};

// Args.
export type BurnV1InstructionArgs = PickPartial<
  BurnV1InstructionDataArgs & BurnV1InstructionExtraArgs,
  'tokenOwner'
>;

// Instruction.
export function burnV1(
  context: Pick<
    Context,
    'serializer' | 'programs' | 'eddsa' | 'identity' | 'payer'
  >,
  input: BurnV1InstructionAccounts & BurnV1InstructionArgs
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
    mint: [input.mint, true] as const,
  };
  const resolvingArgs = {};
  addObjectProperty(
    resolvedAccounts,
    'authority',
    input.authority
      ? ([input.authority, true] as const)
      : ([context.identity, true] as const)
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
    'metadata',
    input.metadata
      ? ([input.metadata, true] as const)
      : ([
          findMetadataPda(context, { mint: publicKey(input.mint, false) }),
          true,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'edition',
    input.edition
      ? ([input.edition, true] as const)
      : resolveMasterEdition(
          context,
          { ...input, ...resolvedAccounts },
          { ...input, ...resolvingArgs },
          programId,
          true
        )
  );
  addObjectProperty(
    resolvingArgs,
    'tokenOwner',
    input.tokenOwner ?? context.identity.publicKey
  );
  addObjectProperty(
    resolvedAccounts,
    'token',
    input.token
      ? ([input.token, true] as const)
      : ([
          findAssociatedTokenPda(context, {
            mint: publicKey(input.mint, false),
            owner: resolvingArgs.tokenOwner,
          }),
          true,
        ] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'masterEditionMint',
    input.masterEditionMint
      ? ([input.masterEditionMint, false] as const)
      : ([programId, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'masterEdition',
    input.masterEdition
      ? ([input.masterEdition, true] as const)
      : resolveBurnMasterEdition(
          context,
          { ...input, ...resolvedAccounts },
          { ...input, ...resolvingArgs },
          programId,
          true
        )
  );
  addObjectProperty(
    resolvedAccounts,
    'masterEditionToken',
    input.masterEditionToken
      ? ([input.masterEditionToken, false] as const)
      : ([programId, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'editionMarker',
    input.editionMarker
      ? ([input.editionMarker, true] as const)
      : ([programId, false] as const)
  );
  addObjectProperty(
    resolvedAccounts,
    'tokenRecord',
    input.tokenRecord
      ? ([input.tokenRecord, true] as const)
      : resolveTokenRecord(
          context,
          { ...input, ...resolvedAccounts },
          { ...input, ...resolvingArgs },
          programId,
          true
        )
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
  addObjectProperty(
    resolvedAccounts,
    'splTokenProgram',
    input.splTokenProgram
      ? ([input.splTokenProgram, false] as const)
      : ([
          context.programs.getPublicKey(
            'splToken',
            'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
          ),
          false,
        ] as const)
  );
  const resolvedArgs = { ...input, ...resolvingArgs };

  addAccountMeta(keys, signers, resolvedAccounts.authority, false);
  addAccountMeta(keys, signers, resolvedAccounts.collectionMetadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.metadata, false);
  addAccountMeta(keys, signers, resolvedAccounts.edition, false);
  addAccountMeta(keys, signers, resolvedAccounts.mint, false);
  addAccountMeta(keys, signers, resolvedAccounts.token, false);
  addAccountMeta(keys, signers, resolvedAccounts.masterEdition, false);
  addAccountMeta(keys, signers, resolvedAccounts.masterEditionMint, false);
  addAccountMeta(keys, signers, resolvedAccounts.masterEditionToken, false);
  addAccountMeta(keys, signers, resolvedAccounts.editionMarker, false);
  addAccountMeta(keys, signers, resolvedAccounts.tokenRecord, false);
  addAccountMeta(keys, signers, resolvedAccounts.systemProgram, false);
  addAccountMeta(keys, signers, resolvedAccounts.sysvarInstructions, false);
  addAccountMeta(keys, signers, resolvedAccounts.splTokenProgram, false);

  // Data.
  const data =
    getBurnV1InstructionDataSerializer(context).serialize(resolvedArgs);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
