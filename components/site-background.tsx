import Grainient from "@/components/Grainient"

export default function SiteBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background">
      <Grainient
        className="h-full w-full opacity-80"
        timeSpeed={0.18}
        colorBalance={0}
        warpStrength={0.65}
        warpFrequency={3.5}
        warpSpeed={0.7}
        warpAmplitude={70}
        blendAngle={-22}
        blendSoftness={0.12}
        rotationAmount={260}
        noiseScale={2.4}
        grainAmount={0.08}
        grainScale={2.6}
        grainAnimated
        contrast={1.25}
        saturation={0.9}
        zoom={0.72}
        color1="#10B981"
        color2="#5227FF"
        color3="#B497CF"
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_0%,var(--background)_78%)]" />
    </div>
  )
}
