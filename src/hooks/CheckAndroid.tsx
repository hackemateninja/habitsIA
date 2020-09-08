/*
* Funcióin que sirve para verificar si un dispositivo es Android
*
* */

import React from 'react';
import {Platform} from 'react-native';

export default (): boolean=> {
	const [isAndroid, setIsAndroid] = React.useState(false);

	React.useEffect(()=>{
		if (Platform.OS === 'ios'){
			setIsAndroid(false)
		}else{
			setIsAndroid(true)
		}
	},[])

	return isAndroid;
}
