import { createContext, useContext, useState } from 'react';

const LoadingContext = createContext({
    loading: false,
    setLoading: null,
});

export function Spinner({ children }) {
    const [loading, setLoading] = useState(false);
    const value = { loading, setLoading };
    return (
        <LoadingContext.Provider value={value}>
            {loading && <div className="spinner__container">
                <div className="spinner__box">
                    <span className="spinner__holder">
                        <span className="spinner__ray-1"></span>
                        <span className="spinner__ray-2"></span>
                        <span className="spinner__ray-3"></span>
                        <span className="spinner__ray-4"></span>
                        <span className="spinner__ray-5"></span>
                        <span className="spinner__ray-6"></span>
                        <span className="spinner__ray-7"></span>
                        <span className="spinner__ray-8"></span>
                    </span>
                </div>
            </div>}
            {!loading && <div>{children}</div>}
        </LoadingContext.Provider>
    );
}

export function useLoading() {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error("useLoading must be used within LoadingProvider");
    }
    return context;
}
