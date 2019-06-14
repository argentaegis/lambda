// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    projects {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      projects {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getProject = `query GetProject($id: ID!) {
  getProject(id: $id) {
    id
    name
    users {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const listProjects = `query ListProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      users {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getProjectMembership = `query GetProjectMembership($id: ID!) {
  getProjectMembership(id: $id) {
    id
    user {
      id
      name
      projects {
        nextToken
      }
    }
    mission {
      id
      name
      users {
        nextToken
      }
    }
  }
}
`;
export const listProjectMemberships = `query ListProjectMemberships(
  $filter: ModelProjectMembershipFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjectMemberships(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      user {
        id
        name
      }
      mission {
        id
        name
      }
    }
    nextToken
  }
}
`;
