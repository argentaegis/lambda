// eslint-disable
// this is an auto generated file. This will be overwritten

export const addUser = `mutation AddUser($id: String, $email: String) {
  addUser(id: $id, email: $email)
}
`;
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createProject = `mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
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
export const updateProject = `mutation UpdateProject($input: UpdateProjectInput!) {
  updateProject(input: $input) {
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
export const deleteProject = `mutation DeleteProject($input: DeleteProjectInput!) {
  deleteProject(input: $input) {
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
export const createProjectMembership = `mutation CreateProjectMembership($input: CreateProjectMembershipInput!) {
  createProjectMembership(input: $input) {
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
export const updateProjectMembership = `mutation UpdateProjectMembership($input: UpdateProjectMembershipInput!) {
  updateProjectMembership(input: $input) {
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
export const deleteProjectMembership = `mutation DeleteProjectMembership($input: DeleteProjectMembershipInput!) {
  deleteProjectMembership(input: $input) {
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
