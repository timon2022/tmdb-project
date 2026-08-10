import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './app/app'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux';
import { store } from 'app/store'
import './shared/styles/variables.css'



createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
