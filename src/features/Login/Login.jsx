import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Components";
import { password, user } from "../../Icons";
import { userLogin, setUsername, setPassword } from "./authSlice";
import { useDispatch, useSelector } from "react-redux";
import { getHomeData } from "../Home/homeSlice";
import { getProfileData } from "../Profile/profileSlice";

export function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.auth);

    useEffect(() => {
        if (data.status === "fulfilled") {
            dispatch(getHomeData(data.token));
            dispatch(getProfileData(data.token));
            localStorage?.setItem(
                "login",
                JSON.stringify({ isUserLoggedIn: true, token: data.token })
            );
            navigate("/");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.status]);

    const signInHandler = async () => {
        try {
            dispatch(userLogin({ username: data.username, password: data.password }));
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <>
            <Header search={false} />
            <div className="login-page min-h-screen">
                <div className="login-box py-4 flex flex-col items-center rounded-lg">
                    <h1 className="text-2xl mb-6 mt-2">Login into your account</h1>
                    <div className="login-field self-center flex items-center border rounded-sm py-1 px-4 mx-5 my-3">
                        <label htmlFor="mail" className="inline-flex self-center text-xl">
                            {user}
                        </label>
                        <input
                            onChange={(e) => {
                                dispatch(setUsername(e.target.value));
                            }}
                            className="py-1 text-sm self-center bg-transparent outline-none pl-4"
                            type="text"
                            placeholder="Enter your username here"
                        />
                    </div>
                    <div className="login-field self-center flex items-center border rounded-sm py-1 px-4 mx-5 my-3">
                        <label htmlFor="mail" className="inline-flex self-center text-xl">
                            {password}
                        </label>
                        <input
                            onChange={(e) => {
                                dispatch(setPassword(e.target.value));
                            }}
                            className="py-1 text-sm self-center bg-transparent outline-none pl-4"
                            type="password"
                            placeholder="Enter your password here"
                        />
                    </div>
                    <div className="flex items-center">
                        <button
                            className="py-2 px-16 my-4 text-xl border rounded-xl outline-none logout"
                            onClick={() => {
                                signInHandler();
                            }}
                        >
                            Login
                        </button>
                    </div>
                    {/* <p className="secondary-text mt-8">Continue with Google</p>
                    <div className="flex justify-between items-center logout rounded mb-8">
                        <span className="align-middle bg-white p-2 mx-2 text-base">
                            {google}
                        </span>
                        <span className="text-white mx-4 py-4">
                            <button
                                onClick={() => {
                                    signInHandler();
                                }}
                            >
                                Sign in with Google
                            </button>
                        </span>
                    </div> */}
                </div>
            </div>
        </>
    );
}
