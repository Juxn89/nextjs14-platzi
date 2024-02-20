import { cookies } from "next/headers"
import { GraphQLClientSingleton } from "@/graphql"
import { customerAccessTokenCreateMutation } from "@/graphql/mutations/customerAccessTokenCreate"

export const createAccessToken = async (email: string, password: string) => {
	const cookiesStore = cookies()

	const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
	const { customerAccessTokenCreate } = await graphqlClient.request( customerAccessTokenCreateMutation, { email, password } )

	// console.log(customerAccessTokenCreate)
	const { accessToken, expireAt } = customerAccessTokenCreate?.customerAccessToken

	if(accessToken) {
		cookiesStore.set('accessToken', accessToken, {
			path: '/',
			expires: new Date(expireAt),
			httpOnly: true,
			sameSite: 'strict'
		})
	}

	return accessToken
}