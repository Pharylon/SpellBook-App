// Generated by https://quicktype.io

export default interface BeyondFile {
  character:              BeyondCharacter;
  characterConfiguration: CharacterConfiguration;
  characterData:          CharacterData;
}

export interface BeyondCharacter {
  id:                         number;
  readonlyUrl:                string;
  avatarUrl:                  string;
  frameAvatarUrl:             string;
  backdropAvatarUrl:          string;
  smallBackdropAvatarUrl:     string;
  largeBackdropAvatarUrl:     string;
  thumbnailBackdropAvatarUrl: string;
  defaultBackdrop:            DefaultBackdrop;
  avatarId:                   number;
  frameAvatarId:              null;
  backdropAvatarId:           number;
  smallBackdropAvatarId:      number;
  largeBackdropAvatarId:      number;
  thumbnailAvatarId:          number;
  themeColorId:               number;
  themeColor:                 ThemeColor;
  name:                       string;
  socialName:                 null;
  gender:                     string;
  faith:                      string;
  age:                        number;
  hair:                       string;
  eyes:                       string;
  skin:                       string;
  height:                     string;
  weight:                     number;
  inspiration:                boolean;
  baseHitPoints:              number;
  bonusHitPoints:             null;
  overrideHitPoints:          null;
  removedHitPoints:           number;
  temporaryHitPoints:         number;
  currentXp:                  number;
  alignmentId:                number;
  lifestyleId:                number;
  stats:                      Stat[];
  bonusStats:                 Stat[];
  overrideStats:              Stat[];
  background:                 CharacterBackground;
  race:                       Race;
  notes:                      Notes;
  traits:                     Traits;
  preferences:                Preferences;
  lifestyle:                  null;
  inventory:                  Inventory[];
  currencies:                 Currencies;
  classes:                    CharacterClass[];
  feats:                      CharacterFeat[];
  customDefenseAdjustments:   any[];
  customSenses:               any[];
  customSpeeds:               any[];
  customProficiencies:        any[];
  spellDefenses:              null;
  customActions:              any[];
  characterValues:            CharacterValue[];
  conditions:                 any[];
  deathSaves:                 DeathSaves;
  adjustmentXp:               null;
  spellSlots:                 PactMagic[];
  pactMagic:                  PactMagic[];
  activeSourceCategories:     number[];
  spells:                     Actions;
  options:                    Actions;
  choices:                    Choices;
  actions:                    Actions;
  modifiers:                  Modifiers;
  classSpells:                ClassSpell[];
  customItems:                any[];
  campaign:                   Campaign;
  creatures:                  any[];
  vehicles:                   any[];
  components:                 any[];
}

export interface Actions {
  race:  any[];
  class: ActionsClass[];
  feat:  FeatSpell[];
  item?: ItemSpell[];
}

export interface ActionsClass {
  id:                     number;
  entityTypeId:           number;
  limitedUse:             ClassLimitedUse | null;
  name:                   string;
  description:            null | string;
  snippet:                string;
  abilityModifierStatId:  null;
  onMissDescription:      null | string;
  saveFailDescription:    null | string;
  saveSuccessDescription: null | string;
  saveStatId:             null;
  fixedSaveDc:            null;
  attackTypeRange:        null;
  actionType:             number;
  attackSubtype:          null;
  dice:                   null;
  value:                  null;
  damageTypeId:           null;
  isMartialArts:          boolean;
  isProficient:           boolean;
  spellRangeType:         null;
  displayAsAttack:        null;
  range:                  ClassRange;
  activation:             Activation;
  attackCustomData:       { [key: string]: null };
  componentId:            number;
  componentTypeId:        number;
}

export interface Activation {
  activationTime: number | null;
  activationType: number | null;
}

export interface ClassLimitedUse {
  name:               null;
  statModifierUsesId: null;
  resetType:          number;
  numberUsed:         number;
  minNumberConsumed:  number | null;
  maxNumberConsumed:  number;
  maxUses:            number;
  operator:           number | null;
}

export interface ClassRange {
  range:                    null;
  longRange:                null;
  aoeType:                  null;
  aoeSize:                  null;
  hasAoeSpecialDescription: boolean;
}

export interface ItemDefinition {
  id:                     number;
  name:                   string;
  level:                  number;
  school:                 string;
  duration:               Duration;
  activation:             Activation;
  range:                  DefinitionRange;
  asPartOfWeaponAttack:   boolean;
  description:            string;
  snippet:                string;
  concentration:          boolean;
  ritual:                 boolean;
  rangeArea:              null;
  damageEffect:           null;
  components:             number[];
  componentsDescription:  string;
  saveDcAbilityId:        number | null;
  healing:                null | string;
  healingDice:            null;
  tempHpDice:             null;
  attackType:             number | null;
  canCastAtHigherLevel:   boolean;
  isHomebrew:             boolean;
  version:                null | string;
  sourceId:               number | null;
  sourcePageNumber:       number | null;
  requiresSavingThrow:    boolean;
  requiresAttackRoll:     boolean;
  atHigherLevels:         AtHigherLevels;
  modifiers:              Modifier[];
  conditions:             Condition[];
  tags:                   string[];
  castingTimeDescription: string;
}

export interface AtHigherLevels {
  scaleType:              ScaleType | null;
  higherLevelDefinitions: HigherLevelDefinition[];
  additionalAttacks:      AdditionalAttack[];
  additionalTargets:      AdditionalTarget[];
  areaOfEffect:           any[];
  duration:               any[];
  creatures:              any[];
  special:                Special[];
  points:                 Point[];
}

export interface AdditionalAttack {
  totalCount:  number;
  level:       number;
  description: Description;
}

export enum Description {
  AgainstPlantsAndUndeadCreatures = "Against plants and undead creatures",
  Darts = "Darts",
  Empty = "",
}

export interface AdditionalTarget {
  targets:     number;
  level:       number;
  description: string;
}

export interface HigherLevelDefinition {
  level:   number | null;
  typeId:  number;
  dice:    Damage | null;
  value:   number | null;
  details: string;
}

export interface Damage {
  diceCount:      number | null;
  diceValue:      number | null;
  diceMultiplier: number | null;
  fixedValue:     number | null;
  diceString:     null | string;
}

export interface Point {
  die:         Damage;
  level:       number;
  description: string;
}

export enum ScaleType {
  Characterlevel = "characterlevel",
  Spelllevel = "spelllevel",
  Spellscale = "spellscale",
}

export interface Special {
  level:       number;
  description: string;
}

export interface Condition {
  type:              number;
  conditionId:       number;
  conditionDuration: number;
  durationUnit:      string;
  exception:         string;
}

export interface Duration {
  durationInterval: number | null;
  durationUnit:     DurationUnit | null;
  durationType:     DurationType;
}

export enum DurationType {
  Concentration = "Concentration",
  Instantaneous = "Instantaneous",
  Time = "Time",
  UntilDispelled = "Until Dispelled",
  UntilDispelledOrTriggered = "Until Dispelled or Triggered",
}

export enum DurationUnit {
  Day = "Day",
  Hour = "Hour",
  Minute = "Minute",
  Round = "Round",
}

export interface Modifier {
  id:                  string;
  type:                string;
  subType:             string;
  die:                 Damage;
  count:               number;
  duration:            number;
  durationUnit:        null;
  restriction:         string;
  friendlyTypeName:    string;
  friendlySubtypeName: string;
  usePrimaryStat:      boolean;
  atHigherLevels:      AtHigherLevels;
}

export interface DefinitionRange {
  origin:     Origin;
  rangeValue: number | null;
  aoeType:    AoeType | null;
  aoeValue:   number | null;
}

export enum AoeType {
  Cone = "Cone",
  Cube = "Cube",
  Cylinder = "Cylinder",
  Sphere = "Sphere",
  Square = "Square",
}

export enum Origin {
  Ranged = "Ranged",
  Self = "Self",
  Touch = "Touch",
  Unlimited = "Unlimited",
  Sight = "Sight",
}


export interface ItemLimitedUse {
  minNumberConsumed: null;
  maxNumberConsumed: number;
}

export interface CharacterBackground {
  hasCustomBackground: boolean;
  definition:          DefinitionElement;
  customBackground:    CustomBackground;
}

export interface CustomBackground {
  id:                        number;
  entityTypeId:              number;
  name:                      null;
  description:               null;
  featuresBackground:        null;
  characteristicsBackground: null;
  backgroundType:            null;
}

export interface DefinitionElement {
  id:                                  number;
  entityTypeId:                        number;
  name:                                string;
  description:                         string;
  snippet:                             null | string;
  shortDescription:                    string;
  skillProficienciesDescription:       string;
  toolProficienciesDescription:        string;
  languagesDescription:                string;
  equipmentDescription:                string;
  featureName:                         string;
  featureDescription:                  string;
  avatarUrl:                           null;
  largeAvatarUrl:                      null;
  suggestedCharacteristicsDescription: string;
  suggestedProficiencies:              string[];
  suggestedLanguages:                  any[];
  organization:                        null;
  contractsDescription:                null | string;
  spellsPreDescription:                null | string;
  spellsPostDescription:               null | string;
  personalityTraits:                   Bond[];
  ideals:                              Bond[];
  bonds:                               Bond[];
  flaws:                               Bond[];
}

export interface Bond {
  id:          number;
  description: string;
  diceRoll:    number;
}

export interface Stat {
  id:    number;
  name:  null;
  value: number | null;
}

export interface Campaign {
  name:        string;
  description: string;
  link:        string;
  publicNotes: string;
  dmUserId:    number;
  dmUsername:  string;
  characters:  CharacterElement[];
}

export interface CharacterElement {
  userId:        number;
  username:      string;
  characterId:   number;
  characterName: string;
  characterUrl:  string;
  avatarUrl:     string;
  privacyType:   number;
}

export interface CharacterValue {
  typeId:        number;
  value:         number | string;
  notes:         null;
  valueId:       number;
  valueTypeId:   number;
  contextId:     null;
  contextTypeId: null;
}

export interface Choices {
  race:       any[];
  class:      ChoicesBackground[];
  background: ChoicesBackground[];
  feat:       ChoicesBackground[];
}

export interface ChoicesBackground {
  id:              string;
  parentChoiceId:  null | string;
  type:            number;
  subType:         number | null;
  optionValue:     number;
  label:           null | string;
  isOptional:      boolean;
  isInfinite:      boolean;
  defaultSubtypes: string[];
  options:         Option[];
  componentId:     number;
  componentTypeId: number;
}

export interface Option {
  id:          number;
  label:       string;
  description: null | string;
}

export interface ClassSpell {
  entityTypeId:     number;
  characterClassId: number;
  spells:           Spell[];
}

export interface Spell {
  id:                    number;
  entityTypeId:          number;
  definition:            ItemDefinition;
  prepared:              boolean;
  countsAsKnownSpell:    boolean;
  usesSpellSlot:         boolean;
  castAtLevel:           null;
  alwaysPrepared:        boolean;
  restriction:           null;
  spellCastingAbilityId: null;
  displayAsAttack:       null;
  additionalDescription: null;
  castOnlyAsRitual:      boolean;
  ritualCastingType:     null;
  range:                 DefinitionRange;
  activation:            Activation;
  baseLevelAtWill:       boolean;
  atWillLimitedUseLevel: null;
  componentId:           number;
  componentTypeId:       number;
}

export interface ItemSpell extends Spell {
  overrideSaveDc:        null;
  limitedUse:            ItemLimitedUse;
}

export interface FeatSpell extends Spell {
  overrideSaveDc:        null;
  limitedUse:            ClassLimitedUse | null;
}



export interface CharacterClass {
  id:                 number;
  entityTypeId:       number;
  level:              number;
  isStartingClass:    boolean;
  hitDiceUsed:        number;
  definition:         Subclass;
  subclassDefinition: Subclass;
  classFeatures:      ClassClassFeature[];
}

export interface ClassClassFeature {
  definition: ClassFeatureDefinition;
  levelScale: null;
}

export interface ClassFeatureDefinition {
  id:                    number;
  entityTypeId:          number;
  displayOrder:          number;
  name:                  string;
  description:           string;
  snippet:               string;
  activation:            Activation;
  multiClassDescription: string;
  requiredLevel:         number;
  isSubClassFeature:     boolean;
  limitedUse:            LimitedUseElement[];
  hideInBuilder:         boolean;
  hideInSheet:           boolean;
  sourceId:              number;
  sourcePageNumber:      number;
  creatureRules:         any[];
}

export interface LimitedUseElement {
  level: number | null;
  uses:  number;
}

export interface Subclass {
  id:                    number;
  name:                  string;
  description:           string;
  equipmentDescription:  null | string;
  parentClassId:         number | null;
  avatarUrl:             null | string;
  largeAvatarUrl:        null | string;
  portraitAvatarUrl:     null | string;
  moreDetailsUrl:        string;
  spellCastingAbilityId: number;
  sourceIds:             number[];
  hitDice:               number;
  classFeatures:         SubclassClassFeature[];
  wealthDice:            Damage | null;
  canCastSpells:         boolean;
  knowsAllSpells:        boolean;
  spellPrepareType:      number;
  spellContainerName:    null | string;
  sourceId:              number;
  sourcePageNumber:      number | null;
}

export interface SubclassClassFeature {
  id:            number;
  name:          string;
  prerequisite:  null;
  description:   string;
  requiredLevel: number;
  displayOrder:  number;
}

export interface Currencies {
  cp: number;
  sp: number;
  gp: number;
  ep: number;
  pp: number;
}

export interface DeathSaves {
  failCount:    null;
  successCount: null;
  isStabilized: boolean;
}

export interface DefaultBackdrop {
  backdropAvatarUrl:          string;
  smallBackdropAvatarUrl:     string;
  largeBackdropAvatarUrl:     string;
  thumbnailBackdropAvatarUrl: string;
}

export interface CharacterFeat {
  componentTypeId: null;
  componentId:     null;
  definition:      RacialTraitDefinition;
}

export interface RacialTraitDefinition {
  id:               number;
  entityTypeId:     number;
  name:             string;
  description:      string;
  snippet:          null | string;
  activation:       Activation;
  features?:        null;
  sourceId:         number | null;
  sourcePageNumber: number | null;
  creatureRules:    any[];
  prerequisites?:   any[];
  displayOrder?:    number;
  hideInBuilder?:   boolean;
  hideInSheet?:     boolean;
}

export interface Inventory {
  displayAsAttack: null;
  id:              number;
  entityTypeId:    number;
  definition:      InventoryDefinition;
  quantity:        number;
  isAttuned:       boolean;
  equipped:        boolean;
  limitedUse:      InventoryLimitedUse | null;
}

export interface InventoryDefinition {
  subType?:              null | string;
  isConsumable?:         boolean;
  weaponBehaviors:       WeaponBehavior[];
  id:                    number;
  baseTypeId:            number;
  entityTypeId:          number;
  canEquip:              boolean;
  magic:                 boolean;
  name:                  string;
  snippet:               null | string;
  weight:                number;
  type:                  string;
  description:           string;
  canAttune:             boolean;
  attunementDescription: AttunementDescription | null;
  rarity:                Rarity;
  isHomebrew:            boolean;
  version:               null | string;
  sourceId:              number | null;
  sourcePageNumber:      number | null;
  stackable:             boolean;
  bundleSize:            number;
  avatarUrl:             null | string;
  largeAvatarUrl:        null | string;
  filterType:            string;
  cost:                  number | null;
  isPack:                boolean;
  tags:                  string[];
  grantedModifiers:      ItemElement[];
  baseItemId?:           number;
  damage?:               Damage;
  damageType?:           string;
  fixedDamage?:          null;
  properties?:           Property[];
  attackType?:           number;
  categoryId?:           number;
  range?:                number;
  longRange?:            number;
  isMonkWeapon?:         boolean;
}

export enum AttunementDescription {
  DruidSorcererWarlockOrWizard = "Druid, Sorcerer, Warlock, or Wizard",
  Empty = "",
}

export interface ItemElement {
  id:                  string;
  entityId:            number | null;
  entityTypeId:        number | null;
  type:                string;
  subType:             string;
  dice:                Damage | null;
  restriction:         Restriction | null;
  statId:              null;
  requiresAttunement:  boolean;
  duration:            null;
  friendlyTypeName:    string;
  friendlySubtypeName: string;
  isGranted:           boolean;
  bonusTypes:          any[];
  value:               number | null;
  componentId:         number;
  componentTypeId:     number;
}

export enum Restriction {
  AgainstBeingCharmedAndMagicCanTPutYouToSleep = "against being charmed, and magic can’t put you to sleep",
  ClimbingWhileKnotted = "Climbing While Knotted",
  Empty = "",
  SoundOnly = "Sound Only",
  WhileStaffIsHeld = "While Staff is Held",
}

export interface Property {
  id:          number;
  name:        string;
  description: string;
  notes:       null | string;
}

export enum Rarity {
  Common = "Common",
  Rare = "Rare",
  Uncommon = "Uncommon",
  VeryRare = "Very Rare",
}

export interface WeaponBehavior {
  baseItemId:   number;
  baseTypeId:   number;
  type:         string;
  attackType:   number;
  categoryId:   number;
  properties:   Property[];
  damage:       Damage;
  damageType:   string;
  range:        number;
  longRange:    number;
  isMonkWeapon: boolean;
}

export interface InventoryLimitedUse {
  maxUses:              number;
  numberUsed:           number;
  resetType:            string;
  resetTypeDescription: string;
}

export interface Modifiers {
  race:       ItemElement[];
  class:      ItemElement[];
  background: ItemElement[];
  item:       ItemElement[];
  feat:       ItemElement[];
  condition:  any[];
}

export interface Notes {
  allies:              string;
  personalPossessions: null;
  otherHoldings:       null;
  organizations:       string;
  enemies:             string;
  backstory:           string;
  otherNotes:          string;
}

export interface PactMagic {
  level:     number;
  used:      number;
  available: number;
}

export interface Preferences {
  useHomebrewContent:      boolean;
  progressionType:         number;
  encumbranceType:         number;
  ignoreCoinWeight:        boolean;
  hitPointType:            number;
  showUnarmedStrike:       boolean;
  showCompanions:          boolean;
  showWildShape:           boolean;
  primarySense:            number;
  primaryMovement:         number;
  privacyType:             number;
  sharingType:             number;
  abilityScoreDisplayType: number;
  enforceFeatRules:        boolean;
  enforceMulticlassRules:  boolean;
}

export interface Race {
  entityRaceId:      number;
  entityRaceTypeId:  number;
  fullName:          string;
  baseRaceId:        number;
  baseRaceTypeId:    number;
  description:       string;
  avatarUrl:         null;
  largeAvatarUrl:    null;
  portraitAvatarUrl: string;
  moreDetailsUrl:    string;
  isHomebrew:        boolean;
  sourceIds:         number[];
  groupIds:          number[];
  type:              number;
  subRaceShortName:  string;
  baseName:          string;
  racialTraits:      RacialTrait[];
  weightSpeeds:      WeightSpeeds;
  featIds:           any[];
  size:              string;
  sizeId:            number;
}

export interface RacialTrait {
  definition: RacialTraitDefinition;
}

export interface WeightSpeeds {
  normal:            Normal;
  encumbered:        null;
  heavilyEncumbered: null;
  pushDragLift:      null;
  override:          null;
}

export interface Normal {
  walk:   number;
  fly:    number;
  burrow: number;
  swim:   number;
  climb:  number;
}

export interface ThemeColor {
  themeColorId:    number;
  themeColor:      string;
  backgroundColor: BackgroundColor;
  name:            string;
  raceId:          null;
  subRaceId:       null;
  classId:         number;
  tags:            ThemeColorTag[];
}

export enum BackgroundColor {
  Fefefe = "#FEFEFE",
}

export enum ThemeColorTag {
  ClassThemes = "Class Themes",
}

export interface Traits {
  personalityTraits: string;
  ideals:            string;
  bonds:             string;
  flaws:             string;
  appearance:        null;
}

export interface CharacterConfiguration {
  startingEquipmentType: null;
  abilityScoreType:      number;
  showHelpText:          boolean;
}

export interface CharacterData {
  backgrounds: DefinitionElement[];
  feats:       CharacterDataFeat[];
  portraits:   Portrait[];
  frames:      any[];
  backdrops:   Backdrop[];
  themeColors: ThemeColor[];
  subclasses:  Subclass[];
}

export interface Backdrop {
  id:                         number;
  name:                       string;
  backdropAvatarId:           number;
  smallBackdropAvatarId:      number;
  largeBackdropAvatarId:      number;
  thumbnailBackdropAvatarId:  number;
  backdropAvatarUrl:          string;
  smallBackdropAvatarUrl:     string;
  largeBackdropAvatarUrl:     string;
  thumbnailBackdropAvatarUrl: string;
  raceId:                     null;
  subRaceId:                  null;
  classId:                    number;
  tags:                       BackdropTag[];
}

export enum BackdropTag {
  ClassBackdrops = "Class Backdrops",
}

export interface CharacterDataFeat {
  id:               number;
  entityTypeId:     number;
  name:             string;
  description:      string;
  snippet:          string;
  activation:       Activation;
  features:         null;
  sourceId:         number | null;
  sourcePageNumber: number | null;
  creatureRules:    any[];
  prerequisites:    Prerequisite[];
}

export interface Prerequisite {
  description:          string;
  prerequisiteMappings: PrerequisiteMapping[];
}

export interface PrerequisiteMapping {
  id:                  number;
  entityId:            number | null;
  entityTypeId:        number | null;
  type:                Type;
  subType:             string;
  value:               number | null;
  friendlyTypeName:    FriendlyTypeName;
  friendlySubTypeName: string;
}

export enum FriendlyTypeName {
  AbilityScore = "Ability Score",
  CustomValue = "Custom Value",
  Proficiency = "Proficiency",
  Race = "Race",
  Size = "Size",
  Subrace = "Subrace",
}

export enum Type {
  AbilityScore = "ability-score",
  CustomValue = "custom-value",
  Proficiency = "proficiency",
  Race = "race",
  Size = "size",
  Subrace = "subrace",
}

export interface Portrait {
  id:        number;
  name:      null | string;
  avatarId:  number;
  avatarUrl: string;
  raceId:    number;
  subRaceId: null;
  classId:   null;
  tags:      any[];
}
