'use client';

import dynamic from 'next/dynamic';
import type { Application } from '@splinetool/runtime';

const HERO_SPLINE_SCENE =
  'https://prod.spline.design/27CNDdprOGvaF5yv/scene.splinecode';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div
      className="h-full w-full animate-pulse bg-gradient-to-br from-blue-100/30 to-teal-100/20"
      aria-hidden="true"
    />
  ),
});

function shouldShowObject(name: string): boolean {
  if (name === 'Cube Clones' || name === 'Cube' || name === 'Cube 2') return true;
  if (/^Clone \d+$/.test(name)) return true;
  if (/light/i.test(name)) return true;
  return false;
}

function frameCubeCluster(spline: Application, fullSection: boolean) {
  const cubeGroup = spline.findObjectByName('Cube Clones');
  if (cubeGroup) {
    if (fullSection) {
      // Sit cluster on the right so it does not cover the headline
      cubeGroup.position.x += 80;
      cubeGroup.position.y += 10;
    } else {
      cubeGroup.position.x -= 300;
      cubeGroup.position.y += 45;
    }
  }

  const camera = spline.findObjectByName('Camera');
  if (camera) {
    camera.position.x += fullSection ? 100 : -175;
  }

  // Lower zoom = smaller on screen (pulled back)
  spline.setZoom(fullSection ? 0.44 : 0.64);
  spline.requestRender();
}

function configureHeroScene(spline: Application, fullSection: boolean) {
  spline.setBackgroundColor('transparent');
  spline.play();
  spline.setGlobalEvents(true);

  const controls = spline.controls as
    | { enableRotate?: boolean; enableZoom?: boolean; enablePan?: boolean }
    | undefined;
  if (controls) {
    controls.enableRotate = false;
    controls.enableZoom = false;
    controls.enablePan = false;
  }

  spline.getAllObjects().forEach((object) => {
    if (!shouldShowObject(object.name)) {
      object.visible = false;
    }
  });

  const watermark = spline.findObjectByName('SplineWatermark');
  if (watermark) watermark.visible = false;

  const frame = () => frameCubeCluster(spline, fullSection);
  frame();
  requestAnimationFrame(frame);
}

type HeroSplineProps = {
  fullSection?: boolean;
};

export default function HeroSpline({ fullSection = false }: HeroSplineProps) {
  const onLoad = (spline: Application) => configureHeroScene(spline, fullSection);

  if (fullSection) {
    return (
      <div
        className="hero-spline-wrap hero-spline-wrap--full absolute inset-0 z-[1] overflow-hidden pointer-events-auto"
        aria-hidden="true"
      >
        <div className="hero-spline hero-spline--full h-full w-full touch-manipulation cursor-grab active:cursor-grabbing">
          <Spline
            scene={HERO_SPLINE_SCENE}
            onLoad={onLoad}
            className="h-full w-full pointer-events-auto"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="hero-spline-wrap w-full max-w-none overflow-visible">
      <div
        className="hero-spline relative z-20 w-full min-h-[22rem] h-[clamp(22rem,58vw,36rem)] sm:min-h-[26rem] sm:h-[clamp(26rem,54vw,40rem)] lg:min-h-[30rem] lg:h-[clamp(30rem,62vh,44rem)] xl:h-[clamp(34rem,68vh,48rem)] touch-manipulation cursor-grab active:cursor-grabbing"
        role="img"
        aria-label="Interactive 3D cube animation. Drag the blocks to move them."
      >
        <Spline
          scene={HERO_SPLINE_SCENE}
          onLoad={onLoad}
          className="h-full w-full min-h-[inherit] pointer-events-auto"
        />
      </div>
    </div>
  );
}
