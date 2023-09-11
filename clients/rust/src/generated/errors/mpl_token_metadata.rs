//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use num_derive::FromPrimitive;
use thiserror::Error;

#[derive(Clone, Debug, Eq, Error, FromPrimitive, PartialEq)]
pub enum MplTokenMetadataError {
    /// 0 (0x0) -
    #[error("")]
    InstructionUnpackError,
    /// 1 (0x1) -
    #[error("")]
    InstructionPackError,
    /// 2 (0x2) - Lamport balance below rent-exempt threshold
    #[error("Lamport balance below rent-exempt threshold")]
    NotRentExempt,
    /// 3 (0x3) - Already initialized
    #[error("Already initialized")]
    AlreadyInitialized,
    /// 4 (0x4) - Uninitialized
    #[error("Uninitialized")]
    Uninitialized,
    /// 5 (0x5) -  Metadata's key must match seed of ['metadata', program id, mint] provided
    #[error(" Metadata's key must match seed of ['metadata', program id, mint] provided")]
    InvalidMetadataKey,
    /// 6 (0x6) - Edition's key must match seed of ['metadata', program id, name, 'edition'] provided
    #[error("Edition's key must match seed of ['metadata', program id, name, 'edition'] provided")]
    InvalidEditionKey,
    /// 7 (0x7) - Update Authority given does not match
    #[error("Update Authority given does not match")]
    UpdateAuthorityIncorrect,
    /// 8 (0x8) - Update Authority needs to be signer to update metadata
    #[error("Update Authority needs to be signer to update metadata")]
    UpdateAuthorityIsNotSigner,
    /// 9 (0x9) - You must be the mint authority and signer on this transaction
    #[error("You must be the mint authority and signer on this transaction")]
    NotMintAuthority,
    /// 10 (0xA) - Mint authority provided does not match the authority on the mint
    #[error("Mint authority provided does not match the authority on the mint")]
    InvalidMintAuthority,
    /// 11 (0xB) - Name too long
    #[error("Name too long")]
    NameTooLong,
    /// 12 (0xC) - Symbol too long
    #[error("Symbol too long")]
    SymbolTooLong,
    /// 13 (0xD) - URI too long
    #[error("URI too long")]
    UriTooLong,
    /// 14 (0xE) -
    #[error("")]
    UpdateAuthorityMustBeEqualToMetadataAuthorityAndSigner,
    /// 15 (0xF) - Mint given does not match mint on Metadata
    #[error("Mint given does not match mint on Metadata")]
    MintMismatch,
    /// 16 (0x10) - Editions must have exactly one token
    #[error("Editions must have exactly one token")]
    EditionsMustHaveExactlyOneToken,
    /// 17 (0x11) -
    #[error("")]
    MaxEditionsMintedAlready,
    /// 18 (0x12) -
    #[error("")]
    TokenMintToFailed,
    /// 19 (0x13) -
    #[error("")]
    MasterRecordMismatch,
    /// 20 (0x14) -
    #[error("")]
    DestinationMintMismatch,
    /// 21 (0x15) -
    #[error("")]
    EditionAlreadyMinted,
    /// 22 (0x16) -
    #[error("")]
    PrintingMintDecimalsShouldBeZero,
    /// 23 (0x17) -
    #[error("")]
    OneTimePrintingAuthorizationMintDecimalsShouldBeZero,
    /// 24 (0x18) - EditionMintDecimalsShouldBeZero
    #[error("EditionMintDecimalsShouldBeZero")]
    EditionMintDecimalsShouldBeZero,
    /// 25 (0x19) -
    #[error("")]
    TokenBurnFailed,
    /// 26 (0x1A) -
    #[error("")]
    TokenAccountOneTimeAuthMintMismatch,
    /// 27 (0x1B) - Derived key invalid
    #[error("Derived key invalid")]
    DerivedKeyInvalid,
    /// 28 (0x1C) - The Printing mint does not match that on the master edition!
    #[error("The Printing mint does not match that on the master edition!")]
    PrintingMintMismatch,
    /// 29 (0x1D) - The One Time Printing Auth mint does not match that on the master edition!
    #[error("The One Time Printing Auth mint does not match that on the master edition!")]
    OneTimePrintingAuthMintMismatch,
    /// 30 (0x1E) - The mint of the token account does not match the Printing mint!
    #[error("The mint of the token account does not match the Printing mint!")]
    TokenAccountMintMismatch,
    /// 31 (0x1F) - The mint of the token account does not match the master metadata mint!
    #[error("The mint of the token account does not match the master metadata mint!")]
    TokenAccountMintMismatchV2,
    /// 32 (0x20) - Not enough tokens to mint a limited edition
    #[error("Not enough tokens to mint a limited edition")]
    NotEnoughTokens,
    /// 33 (0x21) -
    #[error("")]
    PrintingMintAuthorizationAccountMismatch,
    /// 34 (0x22) -
    #[error("")]
    AuthorizationTokenAccountOwnerMismatch,
    /// 35 (0x23) -
    #[error("")]
    Disabled,
    /// 36 (0x24) - Creators list too long
    #[error("Creators list too long")]
    CreatorsTooLong,
    /// 37 (0x25) - Creators must be at least one if set
    #[error("Creators must be at least one if set")]
    CreatorsMustBeAtleastOne,
    /// 38 (0x26) -
    #[error("")]
    MustBeOneOfCreators,
    /// 39 (0x27) - This metadata does not have creators
    #[error("This metadata does not have creators")]
    NoCreatorsPresentOnMetadata,
    /// 40 (0x28) - This creator address was not found
    #[error("This creator address was not found")]
    CreatorNotFound,
    /// 41 (0x29) - Basis points cannot be more than 10000
    #[error("Basis points cannot be more than 10000")]
    InvalidBasisPoints,
    /// 42 (0x2A) - Primary sale can only be flipped to true and is immutable
    #[error("Primary sale can only be flipped to true and is immutable")]
    PrimarySaleCanOnlyBeFlippedToTrue,
    /// 43 (0x2B) - Owner does not match that on the account given
    #[error("Owner does not match that on the account given")]
    OwnerMismatch,
    /// 44 (0x2C) - This account has no tokens to be used for authorization
    #[error("This account has no tokens to be used for authorization")]
    NoBalanceInAccountForAuthorization,
    /// 45 (0x2D) - Share total must equal 100 for creator array
    #[error("Share total must equal 100 for creator array")]
    ShareTotalMustBe100,
    /// 46 (0x2E) -
    #[error("")]
    ReservationExists,
    /// 47 (0x2F) -
    #[error("")]
    ReservationDoesNotExist,
    /// 48 (0x30) -
    #[error("")]
    ReservationNotSet,
    /// 49 (0x31) -
    #[error("")]
    ReservationAlreadyMade,
    /// 50 (0x32) -
    #[error("")]
    BeyondMaxAddressSize,
    /// 51 (0x33) - NumericalOverflowError
    #[error("NumericalOverflowError")]
    NumericalOverflowError,
    /// 52 (0x34) -
    #[error("")]
    ReservationBreachesMaximumSupply,
    /// 53 (0x35) -
    #[error("")]
    AddressNotInReservation,
    /// 54 (0x36) - You cannot unilaterally verify another creator, they must sign
    #[error("You cannot unilaterally verify another creator, they must sign")]
    CannotVerifyAnotherCreator,
    /// 55 (0x37) - You cannot unilaterally unverify another creator
    #[error("You cannot unilaterally unverify another creator")]
    CannotUnverifyAnotherCreator,
    /// 56 (0x38) -
    #[error("")]
    SpotMismatch,
    /// 57 (0x39) - Incorrect account owner
    #[error("Incorrect account owner")]
    IncorrectOwner,
    /// 58 (0x3A) -
    #[error("")]
    PrintingWouldBreachMaximumSupply,
    /// 59 (0x3B) - Data is immutable
    #[error("Data is immutable")]
    DataIsImmutable,
    /// 60 (0x3C) - No duplicate creator addresses
    #[error("No duplicate creator addresses")]
    DuplicateCreatorAddress,
    /// 61 (0x3D) -
    #[error("")]
    ReservationSpotsRemainingShouldMatchTotalSpotsAtStart,
    /// 62 (0x3E) - Invalid token program
    #[error("Invalid token program")]
    InvalidTokenProgram,
    /// 63 (0x3F) - Data type mismatch
    #[error("Data type mismatch")]
    DataTypeMismatch,
    /// 64 (0x40) -
    #[error("")]
    BeyondAlottedAddressSize,
    /// 65 (0x41) -
    #[error("")]
    ReservationNotComplete,
    /// 66 (0x42) -
    #[error("")]
    TriedToReplaceAnExistingReservation,
    /// 67 (0x43) - Invalid operation
    #[error("Invalid operation")]
    InvalidOperation,
    /// 68 (0x44) - Invalid Owner
    #[error("Invalid Owner")]
    InvalidOwner,
    /// 69 (0x45) - Printing mint supply must be zero for conversion
    #[error("Printing mint supply must be zero for conversion")]
    PrintingMintSupplyMustBeZeroForConversion,
    /// 70 (0x46) - One Time Auth mint supply must be zero for conversion
    #[error("One Time Auth mint supply must be zero for conversion")]
    OneTimeAuthMintSupplyMustBeZeroForConversion,
    /// 71 (0x47) - You tried to insert one edition too many into an edition mark pda
    #[error("You tried to insert one edition too many into an edition mark pda")]
    InvalidEditionIndex,
    /// 72 (0x48) -
    #[error("")]
    ReservationArrayShouldBeSizeOne,
    /// 73 (0x49) - Is Mutable can only be flipped to false
    #[error("Is Mutable can only be flipped to false")]
    IsMutableCanOnlyBeFlippedToFalse,
    /// 74 (0x4A) - Collection cannot be verified in this instruction
    #[error("Collection cannot be verified in this instruction")]
    CollectionCannotBeVerifiedInThisInstruction,
    /// 75 (0x4B) - This instruction was deprecated in a previous release and is now removed
    #[error("This instruction was deprecated in a previous release and is now removed")]
    Removed,
    /// 76 (0x4C) -
    #[error("")]
    MustBeBurned,
    /// 77 (0x4D) - This use method is invalid
    #[error("This use method is invalid")]
    InvalidUseMethod,
    /// 78 (0x4E) - Cannot Change Use Method after the first use
    #[error("Cannot Change Use Method after the first use")]
    CannotChangeUseMethodAfterFirstUse,
    /// 79 (0x4F) - Cannot Change Remaining or Available uses after the first use
    #[error("Cannot Change Remaining or Available uses after the first use")]
    CannotChangeUsesAfterFirstUse,
    /// 80 (0x50) - Collection Not Found on Metadata
    #[error("Collection Not Found on Metadata")]
    CollectionNotFound,
    /// 81 (0x51) - Collection Update Authority is invalid
    #[error("Collection Update Authority is invalid")]
    InvalidCollectionUpdateAuthority,
    /// 82 (0x52) - Collection Must Be a Unique Master Edition v2
    #[error("Collection Must Be a Unique Master Edition v2")]
    CollectionMustBeAUniqueMasterEdition,
    /// 83 (0x53) - The Use Authority Record Already Exists, to modify it Revoke, then Approve
    #[error("The Use Authority Record Already Exists, to modify it Revoke, then Approve")]
    UseAuthorityRecordAlreadyExists,
    /// 84 (0x54) - The Use Authority Record is empty or already revoked
    #[error("The Use Authority Record is empty or already revoked")]
    UseAuthorityRecordAlreadyRevoked,
    /// 85 (0x55) - This token has no uses
    #[error("This token has no uses")]
    Unusable,
    /// 86 (0x56) - There are not enough Uses left on this token.
    #[error("There are not enough Uses left on this token.")]
    NotEnoughUses,
    /// 87 (0x57) - This Collection Authority Record Already Exists.
    #[error("This Collection Authority Record Already Exists.")]
    CollectionAuthorityRecordAlreadyExists,
    /// 88 (0x58) - This Collection Authority Record Does Not Exist.
    #[error("This Collection Authority Record Does Not Exist.")]
    CollectionAuthorityDoesNotExist,
    /// 89 (0x59) - This Use Authority Record is invalid.
    #[error("This Use Authority Record is invalid.")]
    InvalidUseAuthorityRecord,
    /// 90 (0x5A) -
    #[error("")]
    InvalidCollectionAuthorityRecord,
    /// 91 (0x5B) - Metadata does not match the freeze authority on the mint
    #[error("Metadata does not match the freeze authority on the mint")]
    InvalidFreezeAuthority,
    /// 92 (0x5C) - All tokens in this account have not been delegated to this user.
    #[error("All tokens in this account have not been delegated to this user.")]
    InvalidDelegate,
    /// 93 (0x5D) -
    #[error("")]
    CannotAdjustVerifiedCreator,
    /// 94 (0x5E) - Verified creators cannot be removed.
    #[error("Verified creators cannot be removed.")]
    CannotRemoveVerifiedCreator,
    /// 95 (0x5F) -
    #[error("")]
    CannotWipeVerifiedCreators,
    /// 96 (0x60) -
    #[error("")]
    NotAllowedToChangeSellerFeeBasisPoints,
    /// 97 (0x61) - Edition override cannot be zero
    #[error("Edition override cannot be zero")]
    EditionOverrideCannotBeZero,
    /// 98 (0x62) - Invalid User
    #[error("Invalid User")]
    InvalidUser,
    /// 99 (0x63) - Revoke Collection Authority signer is incorrect
    #[error("Revoke Collection Authority signer is incorrect")]
    RevokeCollectionAuthoritySignerIncorrect,
    /// 100 (0x64) -
    #[error("")]
    TokenCloseFailed,
    /// 101 (0x65) - Can't use this function on unsized collection
    #[error("Can't use this function on unsized collection")]
    UnsizedCollection,
    /// 102 (0x66) - Can't use this function on a sized collection
    #[error("Can't use this function on a sized collection")]
    SizedCollection,
    /// 103 (0x67) - Missing collection metadata account
    #[error("Missing collection metadata account")]
    MissingCollectionMetadata,
    /// 104 (0x68) - This NFT is not a member of the specified collection.
    #[error("This NFT is not a member of the specified collection.")]
    NotAMemberOfCollection,
    /// 105 (0x69) - This NFT is not a verified member of the specified collection.
    #[error("This NFT is not a verified member of the specified collection.")]
    NotVerifiedMemberOfCollection,
    /// 106 (0x6A) - This NFT is not a collection parent NFT.
    #[error("This NFT is not a collection parent NFT.")]
    NotACollectionParent,
    /// 107 (0x6B) - Could not determine a TokenStandard type.
    #[error("Could not determine a TokenStandard type.")]
    CouldNotDetermineTokenStandard,
    /// 108 (0x6C) - This mint account has an edition but none was provided.
    #[error("This mint account has an edition but none was provided.")]
    MissingEditionAccount,
    /// 109 (0x6D) - This edition is not a Master Edition
    #[error("This edition is not a Master Edition")]
    NotAMasterEdition,
    /// 110 (0x6E) - This Master Edition has existing prints
    #[error("This Master Edition has existing prints")]
    MasterEditionHasPrints,
    /// 111 (0x6F) -
    #[error("")]
    BorshDeserializationError,
    /// 112 (0x70) - Cannot update a verified collection in this command
    #[error("Cannot update a verified collection in this command")]
    CannotUpdateVerifiedCollection,
    /// 113 (0x71) - Edition account doesnt match collection
    #[error("Edition account doesnt match collection ")]
    CollectionMasterEditionAccountInvalid,
    /// 114 (0x72) - Item is already verified.
    #[error("Item is already verified.")]
    AlreadyVerified,
    /// 115 (0x73) -
    #[error("")]
    AlreadyUnverified,
    /// 116 (0x74) - This edition is not a Print Edition
    #[error("This edition is not a Print Edition")]
    NotAPrintEdition,
    /// 117 (0x75) - Invalid Master Edition
    #[error("Invalid Master Edition")]
    InvalidMasterEdition,
    /// 118 (0x76) - Invalid Print Edition
    #[error("Invalid Print Edition")]
    InvalidPrintEdition,
    /// 119 (0x77) - Invalid Edition Marker
    #[error("Invalid Edition Marker")]
    InvalidEditionMarker,
    /// 120 (0x78) - Reservation List is Deprecated
    #[error("Reservation List is Deprecated")]
    ReservationListDeprecated,
    /// 121 (0x79) - Print Edition does not match Master Edition
    #[error("Print Edition does not match Master Edition")]
    PrintEditionDoesNotMatchMasterEdition,
    /// 122 (0x7A) - Edition Number greater than max supply
    #[error("Edition Number greater than max supply")]
    EditionNumberGreaterThanMaxSupply,
    /// 123 (0x7B) - Must unverify before migrating collections.
    #[error("Must unverify before migrating collections.")]
    MustUnverify,
    /// 124 (0x7C) - Invalid Escrow Account Bump Seed
    #[error("Invalid Escrow Account Bump Seed")]
    InvalidEscrowBumpSeed,
    /// 125 (0x7D) - Must Escrow Authority
    #[error("Must Escrow Authority")]
    MustBeEscrowAuthority,
    /// 126 (0x7E) - Invalid System Program
    #[error("Invalid System Program")]
    InvalidSystemProgram,
    /// 127 (0x7F) - Must be a Non Fungible Token
    #[error("Must be a Non Fungible Token")]
    MustBeNonFungible,
    /// 128 (0x80) - Insufficient tokens for transfer
    #[error("Insufficient tokens for transfer")]
    InsufficientTokens,
    /// 129 (0x81) - Borsh Serialization Error
    #[error("Borsh Serialization Error")]
    BorshSerializationError,
    /// 130 (0x82) - Cannot create NFT with no Freeze Authority.
    #[error("Cannot create NFT with no Freeze Authority.")]
    NoFreezeAuthoritySet,
    /// 131 (0x83) - Invalid collection size change
    #[error("Invalid collection size change")]
    InvalidCollectionSizeChange,
    /// 132 (0x84) - Invalid bubblegum signer
    #[error("Invalid bubblegum signer")]
    InvalidBubblegumSigner,
    /// 133 (0x85) - Escrow parent cannot have a delegate
    #[error("Escrow parent cannot have a delegate")]
    EscrowParentHasDelegate,
    /// 134 (0x86) - Mint needs to be signer to initialize the account
    #[error("Mint needs to be signer to initialize the account")]
    MintIsNotSigner,
    /// 135 (0x87) - Invalid token standard
    #[error("Invalid token standard")]
    InvalidTokenStandard,
    /// 136 (0x88) - Invalid mint account for specified token standard
    #[error("Invalid mint account for specified token standard")]
    InvalidMintForTokenStandard,
    /// 137 (0x89) - Invalid authorization rules account
    #[error("Invalid authorization rules account")]
    InvalidAuthorizationRules,
    /// 138 (0x8A) - Missing authorization rules account
    #[error("Missing authorization rules account")]
    MissingAuthorizationRules,
    /// 139 (0x8B) - Missing programmable configuration
    #[error("Missing programmable configuration")]
    MissingProgrammableConfig,
    /// 140 (0x8C) - Invalid programmable configuration
    #[error("Invalid programmable configuration")]
    InvalidProgrammableConfig,
    /// 141 (0x8D) - Delegate already exists
    #[error("Delegate already exists")]
    DelegateAlreadyExists,
    /// 142 (0x8E) - Delegate not found
    #[error("Delegate not found")]
    DelegateNotFound,
    /// 143 (0x8F) - Required account not set in instruction builder
    #[error("Required account not set in instruction builder")]
    MissingAccountInBuilder,
    /// 144 (0x90) - Required argument not set in instruction builder
    #[error("Required argument not set in instruction builder")]
    MissingArgumentInBuilder,
    /// 145 (0x91) - Feature not supported currently
    #[error("Feature not supported currently")]
    FeatureNotSupported,
    /// 146 (0x92) - Invalid system wallet
    #[error("Invalid system wallet")]
    InvalidSystemWallet,
    /// 147 (0x93) - Only the sale delegate can transfer while its set
    #[error("Only the sale delegate can transfer while its set")]
    OnlySaleDelegateCanTransfer,
    /// 148 (0x94) - Missing token account
    #[error("Missing token account")]
    MissingTokenAccount,
    /// 149 (0x95) - Missing SPL token program
    #[error("Missing SPL token program")]
    MissingSplTokenProgram,
    /// 150 (0x96) - Missing authorization rules program
    #[error("Missing authorization rules program")]
    MissingAuthorizationRulesProgram,
    /// 151 (0x97) - Invalid delegate role for transfer
    #[error("Invalid delegate role for transfer")]
    InvalidDelegateRoleForTransfer,
    /// 152 (0x98) - Invalid transfer authority
    #[error("Invalid transfer authority")]
    InvalidTransferAuthority,
    /// 153 (0x99) - Instruction not supported for ProgrammableNonFungible assets
    #[error("Instruction not supported for ProgrammableNonFungible assets")]
    InstructionNotSupported,
    /// 154 (0x9A) - Public key does not match expected value
    #[error("Public key does not match expected value")]
    KeyMismatch,
    /// 155 (0x9B) - Token is locked
    #[error("Token is locked")]
    LockedToken,
    /// 156 (0x9C) - Token is unlocked
    #[error("Token is unlocked")]
    UnlockedToken,
    /// 157 (0x9D) - Missing delegate role
    #[error("Missing delegate role")]
    MissingDelegateRole,
    /// 158 (0x9E) - Invalid authority type
    #[error("Invalid authority type")]
    InvalidAuthorityType,
    /// 159 (0x9F) - Missing token record account
    #[error("Missing token record account")]
    MissingTokenRecord,
    /// 160 (0xA0) - Mint supply must be zero for programmable assets
    #[error("Mint supply must be zero for programmable assets")]
    MintSupplyMustBeZero,
    /// 161 (0xA1) - Data is empty or zeroed
    #[error("Data is empty or zeroed")]
    DataIsEmptyOrZeroed,
    /// 162 (0xA2) - Missing token owner
    #[error("Missing token owner")]
    MissingTokenOwnerAccount,
    /// 163 (0xA3) - Master edition account has an invalid length
    #[error("Master edition account has an invalid length")]
    InvalidMasterEditionAccountLength,
    /// 164 (0xA4) - Incorrect token state
    #[error("Incorrect token state")]
    IncorrectTokenState,
    /// 165 (0xA5) - Invalid delegate role
    #[error("Invalid delegate role")]
    InvalidDelegateRole,
    /// 166 (0xA6) - Print supply is required for non-fungibles
    #[error("Print supply is required for non-fungibles")]
    MissingPrintSupply,
    /// 167 (0xA7) - Missing master edition account
    #[error("Missing master edition account")]
    MissingMasterEditionAccount,
    /// 168 (0xA8) - Amount must be greater than zero
    #[error("Amount must be greater than zero")]
    AmountMustBeGreaterThanZero,
    /// 169 (0xA9) - Invalid delegate args
    #[error("Invalid delegate args")]
    InvalidDelegateArgs,
    /// 170 (0xAA) - Missing address for locked transfer
    #[error("Missing address for locked transfer")]
    MissingLockedTransferAddress,
    /// 171 (0xAB) - Invalid destination address for locked transfer
    #[error("Invalid destination address for locked transfer")]
    InvalidLockedTransferAddress,
    /// 172 (0xAC) - Exceeded account realloc increase limit
    #[error("Exceeded account realloc increase limit")]
    DataIncrementLimitExceeded,
    /// 173 (0xAD) - Cannot update the rule set of a programmable asset that has a delegate
    #[error("Cannot update the rule set of a programmable asset that has a delegate")]
    CannotUpdateAssetWithDelegate,
    /// 174 (0xAE) - Invalid token amount for this operation or token standard
    #[error("Invalid token amount for this operation or token standard")]
    InvalidAmount,
    /// 175 (0xAF) - Missing master edition mint account
    #[error("Missing master edition mint account")]
    MissingMasterEditionMintAccount,
    /// 176 (0xB0) - Missing master edition token account
    #[error("Missing master edition token account")]
    MissingMasterEditionTokenAccount,
    /// 177 (0xB1) - Missing edition marker account
    #[error("Missing edition marker account")]
    MissingEditionMarkerAccount,
    /// 178 (0xB2) - Cannot burn while persistent delegate is set
    #[error("Cannot burn while persistent delegate is set")]
    CannotBurnWithDelegate,
    /// 179 (0xB3) - Missing edition account
    #[error("Missing edition account")]
    MissingEdition,
    /// 180 (0xB4) - Invalid Associated Token Account Program
    #[error("Invalid Associated Token Account Program")]
    InvalidAssociatedTokenAccountProgram,
    /// 181 (0xB5) - Invalid InstructionsSysvar
    #[error("Invalid InstructionsSysvar")]
    InvalidInstructionsSysvar,
    /// 182 (0xB6) - Invalid or Unneeded parent accounts
    #[error("Invalid or Unneeded parent accounts")]
    InvalidParentAccounts,
    /// 183 (0xB7) - Authority cannot apply all update args
    #[error("Authority cannot apply all update args")]
    InvalidUpdateArgs,
    /// 184 (0xB8) - Token account does not have enough tokens
    #[error("Token account does not have enough tokens")]
    InsufficientTokenBalance,
    /// 185 (0xB9) - Missing collection account
    #[error("Missing collection account")]
    MissingCollectionMint,
    /// 186 (0xBA) - Missing collection master edition account
    #[error("Missing collection master edition account")]
    MissingCollectionMasterEdition,
    /// 187 (0xBB) - Invalid token record account
    #[error("Invalid token record account")]
    InvalidTokenRecord,
    /// 188 (0xBC) - The close authority needs to be revoked by the Utility Delegate
    #[error("The close authority needs to be revoked by the Utility Delegate")]
    InvalidCloseAuthority,
    /// 189 (0xBD) - Invalid or removed instruction
    #[error("Invalid or removed instruction")]
    InvalidInstruction,
    /// 190 (0xBE) - Missing delegate record
    #[error("Missing delegate record")]
    MissingDelegateRecord,
    /// 191 (0xBF) -
    #[error("")]
    InvalidFeeAccount,
    /// 192 (0xC0) -
    #[error("")]
    InvalidMetadataFlags,
    /// 193 (0xC1) - Cannot change the update authority with a delegate
    #[error("Cannot change the update authority with a delegate")]
    CannotChangeUpdateAuthorityWithDelegate,
    /// 194 (0xC2) - Invalid mint extension type
    #[error("Invalid mint extension type")]
    InvalidMintExtensionType,
    /// 195 (0xC3) - Invalid mint close authority
    #[error("Invalid mint close authority")]
    InvalidMintCloseAuthority,
    /// 196 (0xC4) - Invalid metadata pointer
    #[error("Invalid metadata pointer")]
    InvalidMetadataPointer,
}

impl solana_program::program_error::PrintProgramError for MplTokenMetadataError {
    fn print<E>(&self) {
        solana_program::msg!(&self.to_string());
    }
}
