import { User } from './user.model';
/**
 * Created by Sanja on 7.6.2017..
 */
export class Task {
  id: number;
  name: string;
  status: string;
  estimated: number;
  created: Date;
  user: User;
}
