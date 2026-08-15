import { useEffect, useState } from 'react';

export function usePreloadImage(src) {

    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const img = new Image();
        const handleLoad = () => {
            setIsLoaded(true);
        };
        const handleError = () => {
            setIsLoaded(true);
        };
        img.addEventListener('load', handleLoad);
        img.addEventListener('error', handleError);
        img.src = src;
        if (img.complete) {
            handleLoad();
        }
        return () => {
            img.removeEventListener('load', handleLoad);
            img.removeEventListener('error', handleError);

        };

    }, [src]);

    return [isLoaded];

}