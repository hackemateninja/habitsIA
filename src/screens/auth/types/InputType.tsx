import React from "react";

export default interface InputType {
	label:string,
	errorMessage?: string,
	editable?: boolean,
	maxLength?: number,
	onEndEditing?:any,
	onChange: any,
	value:string,
	type?: string,
	placeholder?: string,
	autofocus?: boolean,
	clearText?: any,
}
