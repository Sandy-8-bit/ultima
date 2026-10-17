"use client";
import { Canvas } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Shape, Group } from "three";
import { gsap, useGSAP } from "@/lib/gsap";
function Hexes() {
  const group = useRef<Group>(null);
  const shape = useMemo(() => { const s = new Shape(); for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3; if (i === 0) s.moveTo(Math.cos(a), Math.sin(a)); else s.lineTo(Math.cos(a), Math.sin(a)); } s.closePath(); return s; }, []);
  useGSAP(() => {
    if (!group.current) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      group.current?.children.forEach((child, i) => { gsap.from(child.position, { y: child.position.y + 2, duration: 1.2, delay: i * .12, ease: "power3.out" }); gsap.to(child.rotation, { z: .12, duration: 3 + i, repeat: -1, yoyo: true, ease: "sine.inOut" }); });
      gsap.to(group.current!.rotation, { y: .45, scrollTrigger: { trigger: "main", start: "top top", end: "+=900", scrub: true } });
    });
    return () => mm.revert();
  });
  return <group ref={group} rotation={[.25, -.32, -.1]} onPointerMove={e => { if (group.current && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) gsap.to(group.current.rotation, { y: e.point.x * .09, x: e.point.y * .07, duration: 1 }); }}>
    {[[0, .85, "#ff38af"], [-.95, -.65, "#0b9e76"], [.95, -.65, "#ff6b2c"]].map(([x, y, color], i) => <mesh key={i} position={[Number(x), Number(y), i * .12]}><extrudeGeometry args={[shape, { depth: .38, bevelEnabled: true, bevelSize: .08, bevelThickness: .08, bevelSegments: 1, steps: 1 }]}/><meshStandardMaterial color={String(color)} flatShading roughness={1}/></mesh>)}
  </group>;
}
export default function LogoScene() { return <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6], fov: 42 }} gl={{ alpha: true, antialias: true }}><ambientLight intensity={2}/><directionalLight position={[4, 5, 6]} intensity={2}/><Hexes/></Canvas>; }
