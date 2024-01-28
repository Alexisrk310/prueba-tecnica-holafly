import React from 'react';
import { render } from '@testing-library/react';
import ThemeToggle from './ThemeToggle';

describe('ThemeToggle', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ThemeToggle />);

        expect(baseElement).toBeTruthy();
    });
});