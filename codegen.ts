import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "schema.graphql",
	documents: ["src/**/*.tsx", "!src/gql/**/*"],
	generates: {
		"./src/gql/": {
			preset: "client",
			plugins: [],
			config: { documentMode: "string" },
			presetConfig: {
				fragmentMasking: { unmaskFunctionName: "getFragmentData" },
			},
		},
	},
};

export default config;
