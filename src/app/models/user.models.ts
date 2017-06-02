import {Role} from './role.models';

export class User {
  id: number;
  username: string;
  password: string;
  role: Role;
}
