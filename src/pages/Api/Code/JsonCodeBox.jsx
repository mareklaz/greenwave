import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const JsonCodeBox = ({ json }) => {
	return (
		<div className=''>
			<SyntaxHighlighter language='json' style={atomDark}>
				{JSON.stringify(json, null, 2)}
			</SyntaxHighlighter>
		</div>
	);
};

export default JsonCodeBox;
