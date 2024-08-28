import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {Navigate, Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Login from "./Components/Login/Login";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {lazy, Suspense, useEffect} from "react";
import {initialize} from "./redux/appReducer";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "./Components/Preloader/Preloader";
import {withSuspense} from "./utils/withSuspense";

const DialogsContainer = lazy(() => import("./Components/Dialogs/DialogsContainer"))
const UsersContainer = lazy(() => import("./Components/Users/UsersContainer"))

const App = () => {

    const dispatch = useDispatch();
    const isInitialized = useSelector(state => state.appReducer.isInitialized);

    useEffect(() => {
        dispatch(initialize());
        const errorHandling = () => {
            alert('Some error occurred')
        }
        window.addEventListener('unhandledrejection', () => {
            errorHandling()
        });
        return () => {
            window.removeEventListener('unhandledrejection', errorHandling)
        }
    }, [])

    if (!isInitialized) {
        return <Preloader/>
    }

    return (
        <div className="App">
            <Suspense fallback={<div><Preloader/></div>}>
                <Header/>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Navigate to='profile'/>}/>
                    <Route path='/profile/*' element={<ProfileContainer/>}/>
                    <Route path='/profile/:userID' element={<ProfileContainer/>}/>
                    <Route path='/users'
                           element={withSuspense(<UsersContainer/>, <div>Loading...</div>)}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='dialogs/*'
                           element={withSuspense(<DialogsContainer/>, <div>Loading...</div>)}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </Suspense>

        </div>
    );
}

export default App;
