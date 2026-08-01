enum Role {
  ADMIN,
  USER,
}

type UserRole = Record<string, number>;

const roles: UserRole = {
  admin: Role.ADMIN,
  user: Role.USER,
};


