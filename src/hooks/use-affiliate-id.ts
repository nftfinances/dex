import { useEffect, useState } from "react";

export const useAffiliateId = () => {

	const [ affiliateId, setAffiliateId ] = useState<string>( '' );

	useEffect( () => {

		const url = new URL( location.href );
		const params = new URLSearchParams( url.search );
		setAffiliateId( params.get( 'affiliate_id' ) || '' );

	}, [] );

	return affiliateId;

};
