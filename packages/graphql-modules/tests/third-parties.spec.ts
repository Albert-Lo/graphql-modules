import 'reflect-metadata';
import { createApplication, createModule, gql, testkit } from '../src';
import { GraphQLField } from 'graphql';
import { SchemaDirectiveVisitor } from '@graphql-tools/utils';

describe('schema directives', () => {
  test('schema directives used on top of produced schema', async () => {
    const id = '12';
    const directives = createModule({
      id: 'directives',
      // We may want to allow for directive and root type definitions on Application level
      // createApplication({ typeDefs: /* ... */ })
      // WDYT?
      typeDefs: gql`
        directive @isAuthenticated on FIELD_DEFINITION
      `,
    });
    const mod = createModule({
      id: 'test',
      typeDefs: gql`
        type Query {
          idOfCurrentlyLoggedInUser: String @isAuthenticated
        }
      `,
      resolvers: {
        Query: {
          idOfCurrentlyLoggedInUser: () => {
            return id;
          },
        },
      },
    });

    const app = createApplication({
      modules: [directives, mod],
    });

    SchemaDirectiveVisitor.visitSchemaDirectives(app.schema, {
      isAuthenticated: class extends SchemaDirectiveVisitor {
        public visitFieldDefinition(field: GraphQLField<any, any>) {
          const orgResolver = field.resolve;

          if (orgResolver) {
            field.resolve = (
              source: {},
              args: {},
              context: { loggedIn?: boolean },
              info
            ) => {
              if (context.loggedIn) {
                return orgResolver!(source, args, context, info);
              }

              throw new Error('NOT LOGGED IN');
            };
          }
        }
      },
    });

    const authResult = await testkit.execute(app, {
      document: gql`
        query test {
          idOfCurrentlyLoggedInUser
        }
      `,
      variableValues: {},
      contextValue: {
        loggedIn: true,
      },
    });

    expect(authResult.errors).toBeUndefined();
    expect(authResult.data).toEqual({
      idOfCurrentlyLoggedInUser: id,
    });

    const noAuthResult = await testkit.execute(app, {
      document: gql`
        query test {
          idOfCurrentlyLoggedInUser
        }
      `,
      contextValue: {
        loggedIn: false,
      },
      variableValues: {},
    });

    expect(noAuthResult.errors).toBeDefined();
    expect(noAuthResult.data).toEqual({
      idOfCurrentlyLoggedInUser: null,
    });
  });

  test('schema directives used on top of schema (apollo)', async () => {
    const id = '12';
    const directives = createModule({
      id: 'directives',
      // We may want to allow for directive and root type definitions on Application level
      // createApplication({ typeDefs: /* ... */ })
      // WDYT?
      typeDefs: gql`
        directive @isAuthenticated on FIELD_DEFINITION
      `,
    });
    const mod = createModule({
      id: 'test',
      typeDefs: gql`
        type Query {
          idOfCurrentlyLoggedInUser: String @isAuthenticated
        }
      `,
      resolvers: {
        Query: {
          idOfCurrentlyLoggedInUser: () => {
            return id;
          },
        },
      },
    });

    const app = createApplication({
      modules: [directives, mod],
    });

    SchemaDirectiveVisitor.visitSchemaDirectives(app.schema, {
      isAuthenticated: class extends SchemaDirectiveVisitor {
        public visitFieldDefinition(field: GraphQLField<any, any>) {
          const orgResolver = field.resolve;

          if (orgResolver) {
            field.resolve = (
              source: {},
              args: {},
              context: { loggedIn?: boolean },
              info
            ) => {
              if (context.loggedIn) {
                return orgResolver!(source, args, context, info);
              }

              throw new Error('NOT LOGGED IN');
            };
          }
        }
      },
    });

    const schema = app.createSchemaForApollo();
    const executeFn = app.createExecution();

    const authResult = await executeFn({
      schema,
      document: gql`
        query test {
          idOfCurrentlyLoggedInUser
        }
      `,
      variableValues: {},
      contextValue: {
        loggedIn: true,
      },
    });

    expect(authResult.errors).toBeUndefined();
    expect(authResult.data).toEqual({
      idOfCurrentlyLoggedInUser: id,
    });

    const noAuthResult = await executeFn({
      schema,
      document: gql`
        query test {
          idOfCurrentlyLoggedInUser
        }
      `,
      contextValue: {
        loggedIn: false,
      },
      variableValues: {},
    });

    expect(noAuthResult.errors).toBeDefined();
    expect(noAuthResult.data).toEqual({
      idOfCurrentlyLoggedInUser: null,
    });
  });
});
