import React from "react";
// @ts-ignore
import {connect} from 'react-redux';
import {GradientContainer, Header} from "../../components";


const Daily = ({navigation, theme}:any) => {

	return(
		<GradientContainer
			topColor={theme.colors.backGroundScreen}
			bottomColor={theme.colors.backGroundScreen}>
		</GradientContainer>
	)
}
const mapStateToProps = (state: object)=>{
	return state;
}
const mapDispatchToProps = (dispatch: Event)=>({

});
export default connect(mapStateToProps, mapDispatchToProps)(Daily);

