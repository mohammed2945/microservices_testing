interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

class UserService {
  private users: User[] = [];

  createUser(name: string, email: string): User {
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      createdAt: new Date(),
    };
    this.users.push(user);
    return user;
  }

  getUser(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }

  getAllUsers(): User[] {
    return this.users;
  }

  deleteUser(id: string): boolean {
    const index = this.users.findIndex(user => user.id === id);
    if (index > -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}

export const userService = new UserService();
