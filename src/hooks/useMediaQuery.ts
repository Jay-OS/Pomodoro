import {useEffect, useState} from 'react';

const useMediaQuery = (query: string) => {
    const mediaMatch = window.matchMedia ? window.matchMedia(query) : null;
    const [matches, setMatches] = useState<boolean>(mediaMatch ? mediaMatch.matches: true);

    useEffect(() => {
        if (mediaMatch) {
            const handler = (e: any) => setMatches(e.matches);
            mediaMatch.addEventListener('change', handler);
            return () => mediaMatch.removeEventListener('change', handler);
        }
    });
    return matches;
};

export default useMediaQuery;
