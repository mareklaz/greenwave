import React from 'react';
import JsonCodeBox from './JsonCodeBox';

export default function CodeBox() {
	const jsonObject = {
		'identifier': 'c5c8ae88-90d4-4e3e-9d8c-3fa2ab849376',
		'order_confirmed': false,
		'is_test_store': true,
		'cart_token': '8e78282114e9a98ca49c0a0a1bcd161w',
		'checkout_token': '',
		'variant_details': {},
		'emissions_total': 50.123,
		'emissions_units': 'kg',
		'offset_cost_total': 3.21,
		'offset_cost_currency': 'USD',
		'offset_cost_total_usd': 3.21,
		'meta': {},
	};

	return (
		<div className='container mx-auto mt-8'>
			<JsonCodeBox json={jsonObject} />
		</div>
	);
}
