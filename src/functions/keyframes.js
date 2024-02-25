import { keyframes } from "@emotion/react";

export const scaleAnimation = keyframes`
    from {
        transform: scale(1.2)
    }

    to {
        transform: scale(1)
    }
`;

export const bottomAnimation = keyframes`
    from {
        transform : translateY(50%);
        opacity : 0;
    }

    to {
        transform : translateY(0);
        opacity : 1;
    }
`;

export const rightAnimation = keyframes`
    from {
        transform : translateX(50%);
        opacity : 0;
    }

    to {
        transform : translateX(0);
        opacity : 1;
    }
`;

export const leftAnimation = keyframes`
    from {
        transform : translateX(-50%);
        opacity : 0;
    }

    to {
        transform : translateX(0);
        opacity : 1;
    }
`;