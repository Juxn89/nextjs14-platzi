"use server"
import { redirect } from "next/navigation"
import { GraphQLClientSingleton } from "@/graphql"
import { createUserMutation } from "@/graphql/mutations/createUserMutation"
import { createAccessToken } from "@/utils/auth/createAccessToken"

export const handleCreateUser = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData)
  delete formDataObject["password_confirmation"]
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const variables = {
    input: {
      ...formDataObject,
      phone: '+505' + formDataObject.phone
    }
  }

  const { customerCreate } = await graphqlClient.request(createUserMutation, variables)
  const { customerUserErrors, customer } = customerCreate

	if(customer?.firstName) {
		await createAccessToken(formDataObject.email as string, formDataObject.password as string)
		redirect('/store')
	}
}