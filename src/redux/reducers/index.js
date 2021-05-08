// Initialize state
import { initialState } from '../initialState';
// Import consts
import { 
	UPLOAD_IMAGE,
	SET_IMAGE_SIZE
} from '../consts';

// Create reducers
const reducers = (state = initialState, action) => {
	switch (action.type) {
		case UPLOAD_IMAGE:
			return {
				...state,
				image: action.payload
			}
		case SET_IMAGE_SIZE:
			return {
				...state,
				imageSize: action.payload
			}
		default:
			return { ...state };
	}
}

export default reducers;