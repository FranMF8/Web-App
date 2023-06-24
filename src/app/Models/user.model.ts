export class User {

  private email: string = "";
  private password: string = "";

  public GetEmail(): string{ return this.email }
  public SetEmail( newEmail: string ): void { this.email = newEmail }

  public GetPassword(): string{ return this.password }
  public SetPassword( newPassword: string ): void { this.password = newPassword }
}
