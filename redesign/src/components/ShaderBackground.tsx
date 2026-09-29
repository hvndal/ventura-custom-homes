import React, { useEffect, useRef } from 'react';

const VERT = `attribute vec2 a; void main(){ gl_Position = vec4(a, 0.0, 1.0); }`;

// Slow domain-warped "silk" in warm stone tones, with a soft light that follows the cursor.
const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 5; i++){ v += a * noise(p); p = m * p; a *= 0.5; }
  return v;
}

void main(){
  float s = min(u_res.x, u_res.y);
  vec2 p = (gl_FragCoord.xy - 0.5 * u_res) / s;
  float t = u_time * 0.05;

  vec2 q = vec2(fbm(p * 1.5 + t), fbm(p * 1.5 + vec2(5.2, 1.3) - t));
  vec2 r = vec2(fbm(p * 1.5 + 2.0 * q + vec2(1.7, 9.2) + 0.6 * t),
                fbm(p * 1.5 + 2.0 * q + vec2(8.3, 2.8) - 0.5 * t));
  float f = fbm(p * 1.3 + 2.4 * r);

  vec3 white = vec3(1.0);
  vec3 stone = vec3(0.961, 0.953, 0.937);
  vec3 shade = vec3(0.80, 0.77, 0.71);
  vec3 brass = vec3(0.71, 0.59, 0.35);

  vec3 col = mix(stone, white, smoothstep(0.30, 0.80, f));
  col = mix(col, shade, smoothstep(0.45, 1.05, length(q)) * 0.62);

  // thin silky folds
  float fold = smoothstep(0.92, 1.0, sin(f * 26.0 + r.x * 8.0));
  col = mix(col, brass, fold * 0.10);
  col += brass * 0.07 * smoothstep(0.55, 0.9, r.y);

  // cursor light
  vec2 m = (u_mouse - 0.5 * u_res) / s;
  float glow = exp(-3.2 * length(p - m));
  col = mix(col, white, glow * 0.55);

  gl_FragColor = vec4(col, 1.0);
}
`;

export const ShaderBackground: React.FC<{ className?: string }> = ({ className = '' }) => {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return sh;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'a');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'u_res');
    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const SCALE = 0.55;
    let raf = 0;
    let visible = false;
    let mouse = [0.7, 0.6];
    let target = [0.7, 0.6];
    const t0 = performance.now();

    const resize = () => {
      canvas.width = Math.max(2, Math.floor(canvas.clientWidth * SCALE));
      canvas.height = Math.max(2, Math.floor(canvas.clientHeight * SCALE));
      gl.viewport(0, 0, canvas.width, canvas.height);
      draw(performance.now());
    };

    const draw = (now: number) => {
      mouse = [mouse[0] + (target[0] - mouse[0]) * 0.06, mouse[1] + (target[1] - mouse[1]) * 0.06];
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (now - t0) / 1000 + 20);
      gl.uniform2f(uMouse, mouse[0] * canvas.width, mouse[1] * canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const frame = (now: number) => {
      if (!visible) {
        raf = 0;
        return;
      }
      draw(now);
      raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      target = [(e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height];
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf && !reduce) raf = requestAnimationFrame(frame);
    });
    const ro = new ResizeObserver(resize);
    io.observe(canvas);
    ro.observe(canvas);
    window.addEventListener('pointermove', onMove);
    resize();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return <canvas ref={ref} className={`bg-[#F5F3EF] ${className}`} aria-hidden="true" />;
};
