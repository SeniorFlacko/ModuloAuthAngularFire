import { PasswordEqualValidator } from './password-equal-validators.directive';

describe('PasswordEqualValidatorsDirective', () => {
  it('should create an instance', () => {
    const directive = new PasswordEqualValidator('ok');
    expect(directive).toBeTruthy();
  });
});
