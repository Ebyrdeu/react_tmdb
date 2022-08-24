import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";


const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
	<QueryClientProvider client={queryClient}>
		<App/>
		<ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
	</QueryClientProvider>
</React.StrictMode>);
