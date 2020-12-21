(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{114:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(8),i=(t(0),t(124)),s={id:"test-your-module",title:"Test Your Module",sidebar_label:"Test Your Module"},a={unversionedId:"introduction/test-your-module",id:"version-legacy/introduction/test-your-module",isDocsHomePage:!1,title:"Test Your Module",description:"With GraphQL Modules and dependency injection it's much easier to test your modules.",source:"@site/versioned_docs/version-legacy/introduction/test-your-module.md",slug:"/introduction/test-your-module",permalink:"/docs/legacy/introduction/test-your-module",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/versioned_docs/version-legacy/introduction/test-your-module.md",version:"legacy",sidebar_label:"Test Your Module",sidebar:"version-legacy/docs",previous:{title:"Subscriptions",permalink:"/docs/legacy/introduction/subscriptions"},next:{title:"Development Environment",permalink:"/docs/legacy/recipes/development-environment"}},c=[],u={rightToc:c};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"With GraphQL Modules and dependency injection it's much easier to test your modules."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Make sure to follow our recommended ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"strong"},{href:"/docs/legacy/recipes/development-environment"}),"development environment configurations"))," to get started with the test environment (we also recommend ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"strong"},{href:"https://jestjs.io/"}),"Jest")),").")),Object(i.b)("p",null,"So let's start with a basic module definition:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"modules/user/user.module.ts")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { GraphQLModule } from '@graphql-modules/core';\nimport gql from 'graphql-tag';\n\nexport class UsersProvider {\n  getUserById(id: string) {\n    // some business logic\n  }\n}\n\nexport const UserModule = new GraphQLModule({\n  providers: [UsersProvider],\n  typeDefs: gql`\n    type User {\n      id: String\n      username: String\n    }\n\n    type Query {\n      userById(id: String!): User\n    }\n  `,\n  resolvers: {\n    User: {\n      id: (user) => user._id,\n      username: (user) => user.username,\n    },\n    Query: {\n      userById: (root, { id }, injector) =>\n        injector.get(UsersProvider).getUserById(id),\n    },\n  },\n});\n")),Object(i.b)("p",null,"You can mock providers by overwriting the existing provider definitions:"),Object(i.b)("p",null,"tests/user.module.spec.ts"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { UserModule } from '../modules/user/user.module';\nimport { execute } from 'graphql';\ndescribe('UserModule', () => {\n  it('FieldResolver of Query: userById', async () => {\n    const { schema, injector } = UserModule;\n\n    injector.provide({\n      provide: UserProvider,\n      overwrite: true,\n      useValue: {\n        userById: (id: string) => ({ id, username: 'USERNAME' }),\n      },\n    });\n\n    const result = await execute({\n      schema,\n      document: gql`\n        query {\n          userById(id: \"ANOTHERID\") {\n            id\n            username\n          }\n        }\n      `,\n      contextValue: {},\n    });\n    expect(result.errors).toBeFalsy();\n    expect(result.data['userById']['id']).toBe('ANOTHERID');\n    expect(result.data['userById']['username']).toBe('USERNAME');\n  });\n});\n")),Object(i.b)("p",null,"If you don't use DI, you can mock your context or resolvers like below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"UsersModule.mock({\n  resolvers: {\n    Query: {\n      foo: (_, __, { fooProp }) => fooProp,\n    },\n  },\n  contextBuilder: () => ({\n    fooProp: 'FOO',\n  }),\n});\n")),Object(i.b)("p",null,"For authentication (a common use case for mocking the context), if ",Object(i.b)("inlineCode",{parentName:"p"},"UsersModule")," imports ",Object(i.b)("inlineCode",{parentName:"p"},"AuthModule")," and you want to mock the logged in user during tests to have an admin role, you can do this in ",Object(i.b)("inlineCode",{parentName:"p"},"beforeAll"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"AuthModule.mock({\n  contextBuilder: () => ({\n    user: {\n      roles: ['admin'],\n    },\n  }),\n});\n")),Object(i.b)("p",null,"In ",Object(i.b)("inlineCode",{parentName:"p"},"afterAll"),", or when you're done with the mock, run ",Object(i.b)("inlineCode",{parentName:"p"},"AuthModule.resetMock()"),"."))}l.isMDXComponent=!0},124:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?o.a.createElement(b,a(a({ref:n},u),{},{components:t})):o.a.createElement(b,a({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var u=2;u<i;u++)s[u]=t[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);