import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";

const App: React.FC = () => (
	<div className="app">
		<BrowserRouter>
			<main className="">
				<AppRoutes />
			</main>
		</BrowserRouter>
	</div>
);

export default App;
