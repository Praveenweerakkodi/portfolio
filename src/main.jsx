import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

// Suppress UNSAFE_componentWillReceiveProps warning from react-swipeable-views
if (process.env.NODE_ENV === 'development') {
	const originalError = console.error;
	console.error = (...args) => {
		if (args[0]?.includes?.('UNSAFE_componentWillReceiveProps')) return;
		originalError(...args);
	};
}

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
