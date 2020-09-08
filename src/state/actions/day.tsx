import {
	GET_DAY
} from "../actionTypes";

export function getDay(status: string, activities: { isHabit: boolean; description: string; completed: boolean; points: number }[], challenges: {}[], tests: ({ description: string; title: string } | { description: string; title: string } | { description: string; title: string })[]) {
	return{
		type: GET_DAY,
		status,
		activities,
		challenges,
		tests
	}
}
