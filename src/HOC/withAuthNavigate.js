import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

export const withAuthNavigate = (Component) => (props) => {
    const isAuth = useSelector(state => state.authReducer.isAuth);
    return isAuth ? <Component {...props}/> : <Navigate to="/login"/>
}