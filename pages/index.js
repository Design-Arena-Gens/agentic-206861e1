import Head from 'next/head';
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import styles from '@/styles/Home.module.css';

const floatingParticles = Array.from({ length: 36 }).map((_, index) => {
  const seed = index + 1;
  return {
    id: `particle-${seed}`,
    delay: (seed % 7) * 0.6,
    duration: 6 + (seed % 5),
    scale: 0.5 + (seed % 4) * 0.15,
    left: `${(seed * 47) % 100}%`,
    top: `${(seed * 83) % 100}%`
  };
});

export default function Home() {
  const lampControls = useAnimationControls();

  useEffect(() => {
    lampControls.start((custom) => ({
      opacity: [0.95, 1, 0.9, 1],
      filter: [
        'drop-shadow(0 0 18px rgba(255,188,92,0.45))',
        'drop-shadow(0 0 32px rgba(255,188,92,0.65))',
        'drop-shadow(0 0 24px rgba(255,188,92,0.55))',
        'drop-shadow(0 0 32px rgba(255,188,92,0.65))'
      ],
      transition: {
        duration: 3 + custom * 0.4,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut'
      }
    }));
  }, [lampControls]);

  return (
    <>
      <Head>
        <title>Royal Ghee Lamp Ceremony</title>
        <meta
          name="description"
          content="A cinematic recreation of an Indian royal couple celebrating their child's birth in a palace illuminated by ghee lamps."
        />
      </Head>
      <div className={styles.sceneWrapper}>
        <div className={styles.smokeLayer} />
        <div className={styles.pillarLeft} />
        <div className={styles.pillarRight} />
        <div className={styles.archLight}>
          <div className={styles.archGlow} />
          <div className={styles.archGradient} />
        </div>
        <div className={styles.garlands}>
          <div className={styles.garlandPrimary} />
          <div className={styles.garlandSecondary} />
        </div>
        <div className={styles.floorReflect} />
        <div className={styles.particles}>
          {floatingParticles.map((particle) => (
            <motion.span
              key={particle.id}
              className={styles.particle}
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: `${particle.delay}s`
              }}
              animate={{
                y: [0, -25, 0],
                scale: [particle.scale, particle.scale * 1.2, particle.scale],
                opacity: [0.1, 0.45, 0.1]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>
        <main className={styles.heroStage}>
          <section className={styles.diagonalGlow} />
          <div className={styles.diyaCluster}>
            {Array.from({ length: 5 }).map((_, index) => (
              <motion.div
                key={`diya-${index}`}
                custom={index}
                animate={lampControls}
                className={styles.diya}
                style={{
                  transform: `translateX(${(index - 2) * 65}px)`
                }}
              >
                <span className={styles.flameCore} />
                <span className={styles.flameGlow} />
              </motion.div>
            ))}
          </div>
          <article className={styles.coupleGroup}>
            <div className={styles.maleFigure}>
              <div className={styles.maleSilhouette}>
                <span className={`${styles.face} ${styles.faceMale}`} />
                <span className={`${styles.turban} ${styles.turbanDetail}`} />
                <span className={styles.shoulderDrape} />
                <motion.div
                  className={`${styles.hands} ${styles.handsLighting}`}
                  animate={{
                    rotate: [0, -2.5, 0],
                    y: [0, -8, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className={styles.diyaLit}>
                    <span className={styles.flameCore} />
                    <span className={styles.flameGlow} />
                  </span>
                </motion.div>
              </div>
            </div>
            <div className={styles.femaleFigure}>
              <div className={styles.femaleSilhouette}>
                <span className={`${styles.face} ${styles.faceFemale}`} />
                <span className={styles.hairVeil} />
                <span className={styles.sariDrape} />
                <motion.div
                  className={styles.flowerTray}
                  animate={{
                    rotate: [2, -1.5, 2],
                    y: [0, -4, 0]
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {Array.from({ length: 3 }).map((_, idx) => (
                    <span key={idx} className={styles.trayLamp}>
                      <span className={styles.flameCore} />
                      <span className={styles.flameGlow} />
                    </span>
                  ))}
                  <span className={styles.trayFlowers} />
                </motion.div>
              </div>
            </div>
          </article>
          <div className={styles.backgroundLamps}>
            {Array.from({ length: 18 }).map((_, index) => (
              <motion.span
                key={`background-lamp-${index}`}
                className={styles.backgroundLamp}
                custom={index}
                animate={lampControls}
                style={{
                  left: `${(index % 6) * 16 + 5}%`,
                  top: `${Math.floor(index / 6) * 22 + 5}%`
                }}
              />
            ))}
          </div>
        </main>
        <aside className={styles.captionBox}>
          <h1>Royal Blessing of Light</h1>
          <p>
            An Indian royal couple honours the birth of their first child with a sacred ghee lamp
            ceremony. The Maharaja kneels to ignite the first diya on an ornate brass stand while the
            Maharani, serene and supportive, offers a tray filled with flowers and shimmering lamps.
            Dozens of flames envelop the carved stone walls in liquid gold, their glow dancing across
            silken fabrics and marigold garlands as incense curls through the grand palace hall.
          </p>
        </aside>
      </div>
    </>
  );
}
