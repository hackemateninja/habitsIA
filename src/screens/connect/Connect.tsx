import React from "react";
// @ts-ignore
import {connect} from 'react-redux';
import {
	GradientContainer,
	Header
} from "../../components";
import Card from "./components/Card";

const image = 'https://www.pngkey.com/png/full/290-2902056_luckymore-smart-watch-review-topffy-smartwatch.png'

const Connect = ({navigation, theme}:any) => {
	const leftAction=()=>{
		navigation.goBack()
	}

	return(
		<GradientContainer
			topColor={theme.colors.backGroundScreen}
			bottomColor={theme.colors.backGroundScreen}>
			<Header
				textColor={theme.colors.mainText}
				hasBack={true}
				title="Dispositivos"
				background={theme.colors.backGroundScreen}
				leftAction={leftAction}
			/>
			<Card
				name="Huawei FIT band 879"
				action={()=>{}}
				status={true}
				image={image}
				theme={theme.colors}
			/>
		</GradientContainer>
	)
}
const mapStateToProps = (state: object)=>{
	return state;
}
const mapDispatchToProps = (dispatch: Event)=>({

});
export default connect(mapStateToProps, mapDispatchToProps)(Connect);

