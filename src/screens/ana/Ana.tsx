import React from "react";
import {COLORS, GLOBAL_STYLES} from "../../constants";
import {GradientContainer, Header} from "../../components";
// @ts-ignore
import {connect} from 'react-redux';


const Ana = ({navigation, theme}:any)=>{

	const leftAction=()=>{
		navigation.goBack()
	}

	navigation.setOptions()

	return(
		<GradientContainer
			topColor={theme.colors.topAna}
			bottomColor={theme.colors.backGroundAna}
		>
			<Header
				textColor={theme.colors.headerTextAna}
				hasBack={true}
				title="ANA"
				background={theme.colors.topAna}
				leftAction={leftAction}
			/>

		</GradientContainer>
	)
}
const mapToStateProps = (state: any) =>{
	return state;
}

export default connect(mapToStateProps)(Ana);
