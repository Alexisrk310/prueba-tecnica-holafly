import React from 'react';

const loading = () => {
	return (
		<div className="relative h-screen">
			<span className="loader absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
		</div>
	);
};

export default loading;