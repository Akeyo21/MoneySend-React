import {gql} from '@apollo/client';
export const GET_CLIENTS = gql`
  query Clients {
    clients {
      name
      phoneNumber
      outstandingBalance
      interest
    }
  }
`;
