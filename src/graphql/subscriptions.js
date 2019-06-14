// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateProject = `subscription OnCreateProject {
  onCreateProject {
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
export const onUpdateProject = `subscription OnUpdateProject {
  onUpdateProject {
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
export const onDeleteProject = `subscription OnDeleteProject {
  onDeleteProject {
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
export const onCreateProjectMembership = `subscription OnCreateProjectMembership {
  onCreateProjectMembership {
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
export const onUpdateProjectMembership = `subscription OnUpdateProjectMembership {
  onUpdateProjectMembership {
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
export const onDeleteProjectMembership = `subscription OnDeleteProjectMembership {
  onDeleteProjectMembership {
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
