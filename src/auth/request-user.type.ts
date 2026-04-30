import { Role } from './roles.enum';

export interface RequestUser {
  id: string;
  nome: string;
  email: string;
  tipo: Role;
  roles: Role[];
}
