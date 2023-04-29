/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  LinkOrderByInput: { // input type
    createdAt?: NexusGenEnums['Sort'] | null; // Sort
    description?: NexusGenEnums['Sort'] | null; // Sort
    url?: NexusGenEnums['Sort'] | null; // Sort
  }
}

export interface NexusGenEnums {
  Sort: "asc" | "desc"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Comment: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // ID!
    linkId: number; // Int!
    text: string; // String!
  }
  Feed: { // root type
    count: number; // Int!
    id?: string | null; // ID
    links: NexusGenRootTypes['Link'][]; // [Link!]!
  }
  Link: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: string; // ID!
    url: string; // String!
  }
  Mutation: {};
  Query: {};
  User: { // root type
    email: string; // String!
    id: number; // Int!
    name: string; // String!
    role: string; // String!
  }
  Vote: { // root type
    link: NexusGenRootTypes['Link']; // Link!
    user: NexusGenRootTypes['User']; // User!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Comment: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // ID!
    linkId: number; // Int!
    postedBy: NexusGenRootTypes['User'] | null; // User
    text: string; // String!
  }
  Feed: { // field return type
    count: number; // Int!
    id: string | null; // ID
    links: NexusGenRootTypes['Link'][]; // [Link!]!
  }
  Link: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: string; // ID!
    postedBy: NexusGenRootTypes['User'] | null; // User
    url: string; // String!
    voters: NexusGenRootTypes['User'][]; // [User!]!
  }
  Mutation: { // field return type
    comment: NexusGenRootTypes['Comment']; // Comment!
    createUser: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    delete: NexusGenRootTypes['Link']; // Link!
    deleteMe: NexusGenRootTypes['User']; // User!
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    post: NexusGenRootTypes['Link']; // Link!
    signup: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    update: NexusGenRootTypes['Link']; // Link!
    updateMe: NexusGenRootTypes['User']; // User!
    vote: NexusGenRootTypes['Vote'] | null; // Vote
  }
  Query: { // field return type
    feed: NexusGenRootTypes['Feed']; // Feed!
    user: NexusGenRootTypes['User']; // User!
  }
  User: { // field return type
    email: string; // String!
    id: number; // Int!
    links: NexusGenRootTypes['Link'][]; // [Link!]!
    name: string; // String!
    role: string; // String!
    votes: NexusGenRootTypes['Link'][]; // [Link!]!
  }
  Vote: { // field return type
    link: NexusGenRootTypes['Link']; // Link!
    user: NexusGenRootTypes['User']; // User!
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  Comment: { // field return type name
    createdAt: 'DateTime'
    id: 'ID'
    linkId: 'Int'
    postedBy: 'User'
    text: 'String'
  }
  Feed: { // field return type name
    count: 'Int'
    id: 'ID'
    links: 'Link'
  }
  Link: { // field return type name
    createdAt: 'DateTime'
    description: 'String'
    id: 'ID'
    postedBy: 'User'
    url: 'String'
    voters: 'User'
  }
  Mutation: { // field return type name
    comment: 'Comment'
    createUser: 'AuthPayload'
    delete: 'Link'
    deleteMe: 'User'
    login: 'AuthPayload'
    post: 'Link'
    signup: 'AuthPayload'
    update: 'Link'
    updateMe: 'User'
    vote: 'Vote'
  }
  Query: { // field return type name
    feed: 'Feed'
    user: 'User'
  }
  User: { // field return type name
    email: 'String'
    id: 'Int'
    links: 'Link'
    name: 'String'
    role: 'String'
    votes: 'Link'
  }
  Vote: { // field return type name
    link: 'Link'
    user: 'User'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    comment: { // args
      linkId: number; // Int!
      text: string; // String!
    }
    createUser: { // args
      email: string; // String!
      name: string; // String!
      password: string; // String!
      role?: string | null; // String
    }
    delete: { // args
      id: string; // ID!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    post: { // args
      description: string; // String!
      url: string; // String!
    }
    signup: { // args
      email: string; // String!
      name: string; // String!
      password: string; // String!
    }
    update: { // args
      description?: string | null; // String
      id: string; // ID!
      url?: string | null; // String
    }
    updateMe: { // args
      email?: string | null; // String
      name?: string | null; // String
    }
    vote: { // args
      linkId: number; // Int!
    }
  }
  Query: {
    feed: { // args
      filter?: string | null; // String
      orderBy?: NexusGenInputs['LinkOrderByInput'][] | null; // [LinkOrderByInput!]
      skip?: number | null; // Int
      take?: number | null; // Int
    }
    user: { // args
      id: string; // ID!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}