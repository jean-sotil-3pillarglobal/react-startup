import { CombineReducers } from 'redux';

const reducers = {
	users: function () {
		return [];
	}
}

const rootReducer = CombineReducers({
	users: reducers.users
});

export default rootReducer;
