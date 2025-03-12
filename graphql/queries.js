export const getStripeProducts = `
    query getStripeProducts {
        getStripeProducts {
            id
            name
            description
            price
            currency
            createdAt
            updatedAt
        }
    }
`;

export const listPeadboTasks = `
    query listPeadboTasks {
        listPeadboTasks {
            items {
                id
                title
                description
                dueDateTime
                priority
                status
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;

export const getPeadboTask = `
    query getPeadboTask($id: ID!) {
        getPeadboTask {
            id
            title
            description
            dueDateTime
            priority
            status
            createdAt
            updatedAt
        }
    }
`;

export const listPeadboUsers = `
    query listPeadboUsers {
        listPeadboUsers {
            items {
                id
                firstName
                lastName
                email
                bio
                jobTitle
                company
                createdAt
                updatedAt
            }
            nextToken
        }
    }
`;

export const getPeadboUser = `
    query getPeadboUser($id: ID!) {
        getPeadboUser {
            id
            firstName
            lastName
            email
            bio
            jobTitle
            company
            createdAt
            updatedAt
        }
    }
`;
