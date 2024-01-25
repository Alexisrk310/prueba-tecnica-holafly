'use client';
import React, { useState } from 'react';

export const useForm = (initialState: Object) => {
	const [form, setform] = useState(initialState);
};
