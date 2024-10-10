export const getProductByHandle = /* GraphQL */ `
    query getProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      images(first: 5) {
        edges {
          node {
            altText
            originalSrc
            width
            height
          }
        }
      }
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
    }
  }
`;