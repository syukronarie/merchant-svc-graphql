const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { gql } = require("apollo-server-core");

const typeDefs = gql`
	type Merchant {
		id: Int!
		merchantName: String!
		phoneNumber: String!
		latitude: Float!
		longitude: Float!
		isActive: Boolean!
	}

	type Query {
		allMerchant: [Merchant]
		books: [Book]
	}
`;

const merchants = [
	{
		id: 14,
		isActive: false,
		latitude: 20.3411024,
		longitude: -103.9970779,
		merchantName: "Adams Trustey",
		phoneNumber: "1462270903",
		recordedDateTime: "2022-10-01T03:41:52.000Z",
	},
	{
		id: 58,
		isActive: false,
		latitude: 44.7947734,
		longitude: -0.5339182,
		merchantName: "Adara Tite",
		phoneNumber: "2121079037",
		recordedDateTime: "2021-10-25T08:24:23.000Z",
	},
];

const resolvers = {
	Query: {
		allMerchant: () => merchants,
	},
};

const PORT = process.env.PORT || 8080;

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

(async () => {
	const { url } = await startStandaloneServer(server, {
		listen: { port: PORT },
	});

	console.log(`🚀  Server ready at: ${url}`);
})();
