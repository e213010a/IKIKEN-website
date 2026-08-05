export const easing = {
  out: [0.16, 1, 0.3, 1] as const, // easeOutExpo系: 力強く減速する
  inOut: [0.65, 0, 0.35, 1] as const,
};

export const duration = {
  fast: 0.3,
  base: 0.6,
  slow: 0.9,
  slower: 1.4,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: easing.out },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.slow, ease: easing.out },
  },
};

export const staggerContainer = (stagger = 0.12, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});
