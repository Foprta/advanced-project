import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import { ThemeProvider } from '@/app/providers/theme';
import '@/shared/config/i18/i18n';

render(<BrowserRouter><ThemeProvider><App /></ThemeProvider></BrowserRouter>, document.getElementById('root'));
