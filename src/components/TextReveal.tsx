"use client"

import React, { createContext, useContext, useMemo, useRef, useState } from "react"
import { useScroll, useMotionValueEvent, MotionValue } from "motion/react"

const TextRevealContext = createContext<{
    scrollProgress: MotionValue<number>
    totalTokens: number
} | null>(null)

interface TextRevealProps {
    body: string
    className?: string
    children: (tokens: string[]) => React.ReactNode
}

export const TextReveal = ({ body, className, children }: TextRevealProps) => {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    const tokens = useMemo(() => {
        // Split by space but keep the structure clean
        return body.split(/\s+/)
    }, [body])

    return (
        <TextRevealContext.Provider value={{ scrollProgress: scrollYProgress, totalTokens: tokens.length }}>
            <div ref={containerRef} className={className}>
                {children(tokens)}
            </div>
        </TextRevealContext.Provider>
    )
}

interface TokenProps {
    index: number
    children: (isActive: boolean) => React.ReactNode
}

const Token = ({ index, children }: TokenProps) => {
    const context = useContext(TextRevealContext)
    if (!context) throw new Error("Token must be used within TextReveal")

    const [isActive, setIsActive] = useState(false)

    useMotionValueEvent(context.scrollProgress, "change", (latest) => {
        // Reveal progressively
        // We want the text to start revealing near the start and finish near the end.
        // Let's add a small buffer so it doesn't start IMMEDIATELY at 0 if we use start start.
        // But user snippet used "h-[200vh]".

        // Simple linear mapping:
        const activationPoint = index / context.totalTokens

        // We can add a slight transition window if we want partial opacity, but the user code
        // uses a boolean isActive for "opacity-10" vs "opacity-100".

        const isVisible = latest > activationPoint
        if (isVisible !== isActive) {
            setIsActive(isVisible)
        }
    })

    return <>{children(isActive)}</>
}

// Assign Token to TextReveal to match the user's API: <TextReveal.Token>
TextReveal.Token = Token
