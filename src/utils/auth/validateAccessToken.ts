import { cookies } from "next/headers"
import { GraphQLClientSingleton } from "@/graphql"
import { customerName } from "@/graphql/queries/customerName"

export const validateAccessToken = async () => {
	try {
		const cookiesStore = cookies()
		const accessToken = cookiesStore.get('accessToken')?.value

		const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
		const { customer }: { customer: any } = await graphqlClient.request(customerName, { customerAccessToken: accessToken })

		return customer;
	} catch (error) {
		return null;
	}
}