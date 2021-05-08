// Initialize state
import { initialState } from '../initialState';
// Import consts
import { 
	UPLOAD_IMAGE
} from '../consts';

// Create reducers
const reducers = (state = initialState, action) => {
	switch (action.type) {
		case UPLOAD_IMAGE:
			return {
				...state,
				image: action.payload
			}
		default:
			return { ...state };
	}
}

export default reducers;