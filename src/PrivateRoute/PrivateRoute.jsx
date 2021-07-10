import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function PrivateRoute({ path, element }) {
    const data = useSelector((state) => state.auth);
    return data.isUserLoggedIn ? (
        <Route path={path} element={element} />
    ) : (
        <Navigate state={{ from: path }} to="/login" replace />
    );
}
