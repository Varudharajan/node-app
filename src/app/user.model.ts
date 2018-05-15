import { Address } from "./address.model";

export class User {

  constructor(
    public id?: number,
    public name?: string,
    public email?: string,
   public username?: string,
   public address?: Address,
  ) {
  }
}
