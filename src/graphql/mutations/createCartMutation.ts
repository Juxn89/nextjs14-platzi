import { gql } from "graphql-request"

/*
	Shopify's GraphQL docs:	https://shopify.dev/docs/api/storefront/2023-10/mutations/cartCreate
*/
export const createCartMutation = gql`
mutation cartCreate($input: CartInput) {
    cartCreate(input: $input) {
        cart {
            checkoutUrl
        }
        userErrors {
            code
            field
            message
        }
    }
}

`