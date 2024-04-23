/* eslint-disable import/no-anonymous-default-export */
export default {
  'todo-pwa': {
    output: {
      client: 'react-query',
      mode: 'tags-split',
      target: './src/packages/api/endpoints',
      schemas: './src/packages/api/models',
      override: {
        mutator: {
          path: './src/packages/api/configs/instances/base_instance.ts',
          name: 'BASE_INSTANCE',
        },
      },
    },
    input: {
      target: `./src/packages/api/swagger.json`,
    },
    hooks: {
      afterAllFilesWrite: 'pnpm run format:fix',
    },
  },
};
