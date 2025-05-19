import { classNames } from './classNames';

describe('classNames', () => {
    test('should return base class only', () => {
        expect(classNames('main')).toBe('main');
    });

    test('should include additional classes', () => {
        expect(classNames('main', {}, ['extra'])).toBe('main extra');
    });

    test('should filter out falsy values in additional classes', () => {
        expect(classNames(
            'main',
            {},
            ['', 'extra', null, undefined, 'another'],
        ))
            .toBe('main extra another');
    });

    test('should include mods that are true', () => {
        expect(classNames('main', { active: true, disabled: false }))
            .toBe('main active');
    });

    test('should ignore mods with falsy values', () => {
        expect(classNames('main', { visible: false, hovered: undefined }))
            .toBe('main');
    });

    test('should handle string values in mods (truthy)', () => {
        expect(classNames('main', { theme: 'dark' })).toBe('main theme');
    });

    test('should ignore mods with empty string or falsy-like strings', () => {
        expect(classNames('main', { color: '' })).toBe('main');
    });
});
