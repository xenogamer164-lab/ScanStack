import { useEffect, useState } from 'react';

const useOfflineCache = (key, initialValue) => {
    const [cachedValue, setCachedValue] = useState(() => {
        // Get stored value
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : initialValue;
    });

    useEffect(() => {
        // Update cached value in LocalStorage whenever it changes
        localStorage.setItem(key, JSON.stringify(cachedValue));
    }, [key, cachedValue]);

    const setValue = (value) => {
        setCachedValue(value);
    };

    return [cachedValue, setValue];
};

export default useOfflineCache;
