export class GithubBadVerificationCode extends Error {
  constructor() {
    super('Invalid Github temporary code')
    this.name = 'bad_verification_code'
  }
}
