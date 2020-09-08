/*
* Pantalla del oneboarding
* */
import React, {useEffect, useState} from 'react';
import OneBoardingItem from "./components/OneBoardingItem";
import CareStyles from "./styles/CareStyles";
import AsyncStorage from "@react-native-community/async-storage";
import {GradientContainer, Loading} from "../../components";
// @ts-ignore
import {connect} from 'react-redux';
import {ActionCreator} from "redux";
import {asyncGetTest} from "../../state/thunks/care";
import {
	Pager,
	PagerProvider
} from "@crowdlinker/react-native-pager";
import {
	Text,
	View
} from "react-native";

const OneBoarding = ({navigation, theme, auth, getTest}: any) => {

	//estado local
	const [activeIndex, setActiveIndex] = useState(0);
	const [data, setData] = useState([]);
	const [showLoading, setShowLoading] = useState(true);

	//funcion que selecciona el item actual
	function onChange(nextIndex: number) {
		setActiveIndex(nextIndex);
	}

	//trae los datos de local storage
	useEffect(()=>{
		AsyncStorage.getItem('@login')
			.then(e => {
				const d = e != null ? JSON.parse(e) : null;
				setData(d.messageBoarding)
			}).catch((e)=>{
			return e
		})
		setTimeout(() => {
			setShowLoading(false);
		},2000);
		getTest({
			type: "tipo",
			id: "care_test"
		})
	},[])

	//llena los datos
	const items: any[] = data

	if (showLoading){
		return (
			<Loading
				message={auth.login.message}
				bottomColor={theme.colors.bottomGradient}
				topColor={theme.colors.topGradient}
				textColor={theme.colors.loadingMessage}
			/>
		)
	}else {
		return (
			<GradientContainer
				topColor={theme.colors.topGradient}
				bottomColor={theme.colors.bottomGradient}>
				<PagerProvider activeIndex={activeIndex} onChange={onChange}>
					<Pager>
						{items.map((i)=>{
							return (
								<OneBoardingItem
									// @ts-ignore
									key={i.image}
									// @ts-ignore
									image={i.image}
									// @ts-ignore
									title={i.title}
									// @ts-ignore
									description={i.description}
									colorButton={theme.colors.secondaryButton}
									colorButtonText={theme.colors.secondaryButtonText}
									colorDescription={theme.colors.careDescription}
									colorTitle={theme.colors.careTitle}
									itemNumber={activeIndex}
									action={()=>navigation.navigate('CareTest')}
								/>
							)
						})}
					</Pager>
					<View style={CareStyles.dotPager}>
						{
							items.map((i, idx)=>{
								const style = {
									fontSize: 70,
									color: idx === activeIndex ? theme.colors.pagerSelected: theme.colors.pagerUnselected
								}
								return(
									<Text
										key={idx}
										style={style}>
										.
									</Text>
								)
							})
						}
					</View>
				</PagerProvider>

			</GradientContainer>
		);
	}
};

//exporta el estado a los props
const mapStateToProps = (state: any)=>{
	return state;
}
//exporta las acciones y las pasa por los props
const mapDispatchToProps = (dispatch: ActionCreator<any>)=>({
	getTest: (body: object)=> dispatch(asyncGetTest(body))
});
//retorna el estado y exporta la pantalla
export default connect(mapStateToProps, mapDispatchToProps)(OneBoarding)
