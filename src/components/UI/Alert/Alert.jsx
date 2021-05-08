// Import styles
import './Alert.css';

export const Alert = ({ message }) => (
  <div className="px-4 py-4 mt-4 rounded-xl alert">
    <h5>{message}</h5>
  </div>
)