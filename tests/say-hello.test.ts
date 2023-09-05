import { sayHello } from '../src/say-hello';

describe('sayHello', function (): void {
	it('should return hello world', function (): void {
		expect(sayHello('world')).toBe('Hello world');
	});
});
