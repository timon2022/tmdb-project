import { Routing } from "./routing/Routing"
import './styles/reset.css';
import s from './styles/GlobalStyles.module.css'
import { Header } from "widgets/header";
import { Footer } from "widgets/footer";
import { useGlobalLoading } from "shared/hooks/useGlobalLoading";
import { LinearProgress } from "shared/ui/linearProgress";
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from "./providers";

export const App = () => {

    const isGlobalLoading = useGlobalLoading()
    return (
        <>
            <ThemeProvider>
                <div className={s.app_wrap}>
                    <Header />
                    {isGlobalLoading && <LinearProgress />}
                    <main className={s.main}>
                        <div className={s.layout}>
                            <Routing />
                        </div>
                    </main>
                    <ToastContainer />
                    <Footer />
                </div>
            </ThemeProvider>

        </>
    )
}