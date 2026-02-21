import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: clamp(52px, 7vw, 84px) 0;
`;

const Title = styled.h2`
    font-size: clamp(26px, 5.5vw, 42px);
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.p`
    font-size: clamp(14px, 3.5vw, 18px);
    padding: 0 16px;
    color: ${({ theme }) => theme.text_secondary};
    margin-top: 8px;
    max-width: 650px;
    text-align: center;
`;

const CarouselShell = styled.div`
    width: 100vw;
    margin-top: 34px;
    position: relative;

    /* щоб не було горизонтального скролу сторінки через 100vw */
    left: 50%;
    transform: translateX(-50%);
`;

const FadeLeft = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 60px;
    pointer-events: none;
    background: linear-gradient(90deg, rgba(7, 8, 18, 1), rgba(7, 8, 18, 0));
    opacity: 0.9;
    z-index: 2;

    @media (max-width: 520px) {
        width: 40px;
    }
`;

const FadeRight = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 60px;
    pointer-events: none;
    background: linear-gradient(270deg, rgba(7, 8, 18, 1), rgba(7, 8, 18, 0));
    opacity: 0.9;
    z-index: 2;

    @media (max-width: 520px) {
        width: 40px;
    }
`;

const Track = styled.div`
    display: flex;
    gap: 18px;
    overflow-x: auto;
    scroll-behavior: auto; /* важливо для плавного rAF */
    padding: 6px clamp(16px, 4vw, 54px) 16px;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    -webkit-overflow-scrolling: touch;
    cursor: grab;

    &:active {
        cursor: grabbing;
    }
`;

const SkillItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.045);
    font-size: 13px;
    color: ${({ theme }) => theme.text_primary};
    min-width: 0;

    img.skill-svg {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
    }

    i {
        font-size: 18px;
        flex-shrink: 0;
    }

    /* 🔥 критично для двох колонок */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
        background: ${({ theme }) => theme.primary + "18"};
        box-shadow: 0 0 10px ${({ theme }) => theme.primary}30;
    }
`;

const Card = styled.div`
    scroll-snap-align: start;
    flex: 0 0 auto;
    width: clamp(260px, 78vw, 420px);

    background: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.card_light};
    border-radius: 16px;
    padding: 18px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.25);

    display: flex;
    flex-direction: column;

    /* 🔥 ключове */
    max-height: 420px;

    @media (max-width: 520px) {
        max-height: 360px;
    }
`;


const SkillList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px 12px;

    /* tablet */
    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    /* mobile */
    @media (max-width: 520px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 8px 10px;
    }

    /* дуже маленькі екрани */
    @media (max-width: 360px) {
        grid-template-columns: 1fr;
    }
`;

const SkillTitle = styled.h3`
    font-size: 18px;
    font-weight: 700;
    line-height: 1.25;
    margin-bottom: 14px;
    color: ${({ theme }) => theme.primary};
    letter-spacing: 0.3px;
    text-shadow: 0 0 12px ${({ theme }) => theme.primary}55;

    @media (max-width: 520px) {
        font-size: 15px;
        margin-bottom: 10px;
        text-shadow: none;
    }
`;


const ArrowBtn = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-58%);
    width: 40px;
    height: 40px;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.card_light};
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_primary};
    display: grid;
    place-items: center;
    cursor: pointer;
    z-index: 3;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
    transition: all 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.primary};
        border-color: ${({ theme }) => theme.primary + "55"};
        transform: translateY(-58%) scale(1.03);
    }

    &:active {
        transform: translateY(-58%) scale(0.98);
    }

    @media (max-width: 520px) {
        width: 36px;
        height: 36px;
        border-radius: 10px;
    }
`;

const LeftBtn = styled(ArrowBtn)`
    left: clamp(10px, 2vw, 18px);
`;

const RightBtn = styled(ArrowBtn)`
    right: clamp(10px, 2vw, 18px);
`;

const Skills = () => {
    const trackRef = useRef(null);

    // rAF autoplay
    const rafId = useRef(null);
    const lastTs = useRef(0);
    const pauseUntil = useRef(0);

    // drag state
    const drag = useRef({ down: false, startX: 0, startScroll: 0 });

    const pauseAuto = (ms = 1200) => {
        pauseUntil.current = performance.now() + ms;
    };

    const scrollByCards = (dir = 1) => {
        const el = trackRef.current;
        if (!el) return;
        pauseAuto(900);

        const cardW = el.querySelector("[data-skill-card]")?.clientWidth || 320;
        const gap = 18;
        el.scrollBy({ left: dir * (cardW + gap), behavior: "smooth" });
    };

    const onMouseDown = (e) => {
        const el = trackRef.current;
        if (!el) return;
        pauseAuto(1600);

        drag.current.down = true;
        drag.current.startX = e.clientX;
        drag.current.startScroll = el.scrollLeft;
    };

    const onMouseMove = (e) => {
        const el = trackRef.current;
        if (!el || !drag.current.down) return;
        pauseAuto(900);

        const dx = e.clientX - drag.current.startX;
        el.scrollLeft = drag.current.startScroll - dx;
    };

    const onMouseUp = () => {
        drag.current.down = false;
        pauseAuto(700);
    };

    const onWheel = (e) => {
        const el = trackRef.current;
        if (!el) return;
        pauseAuto(1200);

        // вертикальне колесо -> горизонтальний скрол
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
        e.preventDefault();
        el.scrollLeft += e.deltaY;
    };

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;

        // ✅ швидкість: px/сек (підкручуй)
        const speed = 50;

        const tick = (ts) => {
            if (!lastTs.current) lastTs.current = ts;
            const dt = (ts - lastTs.current) / 1000;
            lastTs.current = ts;

            if (ts >= pauseUntil.current && !drag.current.down) {
                el.scrollLeft += speed * dt;

                // ✅ infinite loop: бо список дубльований
                const half = el.scrollWidth / 2;
                if (el.scrollLeft >= half) el.scrollLeft -= half;
            }

            rafId.current = requestAnimationFrame(tick);
        };

        rafId.current = requestAnimationFrame(tick);

        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
            rafId.current = null;
            lastTs.current = 0;
        };
    }, []);

    return (
        <Container id="skills">
            <Title>Skills</Title>
            <Desc>
                Technologies and tools I use to build scalable products, production-ready
                systems, and modern applications.
            </Desc>

            <CarouselShell>
                <LeftBtn onClick={() => scrollByCards(-1)} aria-label="Scroll left">
                    <ChevronLeft />
                </LeftBtn>
                <RightBtn onClick={() => scrollByCards(1)} aria-label="Scroll right">
                    <ChevronRight />
                </RightBtn>

                <FadeLeft />
                <FadeRight />

                <Track
                    ref={trackRef}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseUp}
                    onWheel={onWheel}
                    onTouchStart={() => pauseAuto(1800)}
                    onTouchMove={() => pauseAuto(900)}
                >
                    {[...skills, ...skills].map((group, index) => (
                        <Card key={index} data-skill-card>
                            <SkillTitle>{group.title}</SkillTitle>
                            <SkillList>
                                {group.skills.map((skill, i) => (
                                    <SkillItem key={i} title={skill.name}>
                                        {skill.svg ? (
                                            <img
                                                className="skill-svg"
                                                src={skill.svg}
                                                alt={skill.name}
                                                loading="lazy"
                                            />
                                        ) : (
                                            skill.icon && <i className={skill.icon} />
                                        )}
                                        {skill.name}
                                    </SkillItem>
                                ))}
                            </SkillList>
                        </Card>
                    ))}
                </Track>
            </CarouselShell>
        </Container>
    );
};

export default Skills;