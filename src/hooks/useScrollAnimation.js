// src/hooks/useScrollAnimation.js
import { useEffect, useRef } from 'react';

const useScrollAnimation = (animationClass) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass);
                    observer.unobserve(entry.target); // Stop observing once the animation is triggered
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [animationClass]);

    return ref;
};

export default useScrollAnimation;
