# Hero background video

Drop the looping hero reel here as `hero-loop.mp4`.

The hero (`components/hero.tsx`) references `/videos/hero-loop.mp4`. Until that
file exists, the browser simply renders nothing for the `<video>` element —
the gradient + terracotta glow carry the hero on their own, so there's no
broken UI in the meantime.

Recommended spec:

- Content: creative workspace, laptop with a website in progress, branding
  mockups, close-up design/code work, warm cinematic lighting, shallow depth
  of field.
- Format: H.264 `.mp4`, 1920×1080 or 1280×720.
- Length: 10–20s, seamless loop, no audio track needed (the element is muted).
- Size: keep it under ~8MB — it renders at 15–25% opacity under a scrim, so
  fine detail and bitrate beyond that budget won't be visible.
