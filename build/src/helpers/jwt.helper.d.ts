import 'dotenv/config';
import User from '../interfaces/user/User.interface';
export declare const authenticate: ({ username, password, }: User) => Promise<string | void>;
