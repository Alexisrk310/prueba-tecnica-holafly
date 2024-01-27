import React from 'react';
import { render } from '@testing-library/react';
import SkeletonCard from './SkeletonCard';

describe('SkeletonCard', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SkeletonCard />);

        expect(baseElement).toBeTruthy();
    });
});