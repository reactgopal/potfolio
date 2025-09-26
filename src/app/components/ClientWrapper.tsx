// src/components/ClientWrapper.tsx
"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function ClientWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(window, {
                duration: 0.1,
                scrollTo: { offsetY: 0 },
            });

            ScrollTrigger.normalizeScroll(true);
            ScrollTrigger.config({ ignoreMobileResize: true });
        });

        return () => ctx.revert();
    }, []);

    return <>{children}</>;
}
