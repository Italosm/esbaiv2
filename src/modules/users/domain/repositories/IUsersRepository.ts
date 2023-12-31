import { ICreateUser } from '../models/ICreateUser';
import { IPaginateUser } from '../models/IPaginateUser';
import { IUser } from '../models/IUser';

export type SearchParams = {
  page: number;
  skip: number;
  take: number;
};

export interface IUsersRepository {
  findAll({ page, skip, take }: SearchParams): Promise<IPaginateUser>;
  findById(user_id: string): Promise<IUser | null>;
  findByIdWithRelations(
    user_id: string,
    relations: string[],
  ): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
  create(data: ICreateUser): Promise<IUser>;
  save(user: IUser): Promise<IUser>;
}
