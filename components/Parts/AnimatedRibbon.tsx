import { Box, useBreakpointValue, } from "@chakra-ui/react";

type Props = {
  height?: number | string;     // ボックス高さ（例: 720）
  thickness?: number;           // ラインの太さ
  trackColor?: string;          // 薄いトラック色
  headColor?: string;           // 濃い追走ライン色
  speedSec?: number;            // 右方向へ流れる速度（小さいほど速い）
  headLen?: number;             // 追走ラインの長さ（0〜1000）※pathLength基準
  amplitude?: number;           // 波の大きさ
  tiltDeg?: number;             // 右上がり/右下がりの傾き（度）
  offsetY?: number;             // 全体の上下位置微調整（px）
};

export default function WaveAnimation({
  height = 700,
  thickness = 56,
  trackColor = "#d4dfdabb",
  headColor = "#1b756cde",
  speedSec = 6,           // 8秒で1周
  headLen = 1200,          // 追走セグメントの長さ
  amplitude = 85,
  tiltDeg = -8,           // 負で右上がり
  offsetY = 0,
}: Props) {
  const TILE = 1200; // ビュー幅（任意）。アニメは dashoffset のみで無限ループ

  // 波形を作る（C→Sで滑らかなSカーブ）。横幅に渡る1本のパス
  const pathD = `
    M -20,100
    C 200,10  520,10  780,80
    S 1140,190  1400,100
  `;

  const scaleY = amplitude / 60;
  const cx = TILE / 2, cy = 100; // 回転中心

  const preserveAspect = useBreakpointValue({
    base: "xMidYMid slice", // SP
    md: "none",             // PC
  });

  return (
    <Box
      position="relative"
      w="100%"
      h={height}
      overflow="hidden"
      pointerEvents="none"
      aria-hidden
      sx={{
        "--spd": `${speedSec}s`,
        "--seg": headLen,            // 追走ヘッド長（0〜1000）
        "--th": thickness,
      } as any}
    >
      <style jsx>{`
        @keyframes head-move {
          from { stroke-dashoffset: 1000; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(6px); }
          100% { transform: translateY(0); }
        }
        .head {
          stroke-dasharray: var(--seg) 1000; /* 先頭だけ見せて残りは隠す */
          stroke-dashoffset: 1000;
          animation: head-move var(--spd) linear infinite;
        }
        .group { animation: float calc(var(--spd) * 2.2) ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .head, .group { animation: none; }
        }
      `}</style>

      <svg
        viewBox={`0 0 ${TILE} 200`}
        width="100%"
        height="100%"
        preserveAspectRatio={preserveAspect}
      >
        <defs>
          <path id="wave" d={pathD} pathLength={1000} />
        </defs>

        <g
          className="group"
          transform={`
            translate(0, ${offsetY})
            rotate(${tiltDeg} ${cx} ${cy})
            scale(1, ${scaleY})
            translate(0, ${100 / scaleY - 100})
          `}
        >
          {/* 薄いトラック（常に全面） */}
          <use
            href="#wave"
            stroke={trackColor}
            strokeWidth={thickness + 0}
            strokeLinecap="round"
            fill="none"
          />
          {/* 濃い追走ライン（一定長のヘッドだけが右へ無限ループ） */}
          <use
            href="#wave"
            className="head"
            stroke={headColor}
            strokeWidth={thickness}
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </svg>
    
    </Box>
  );
}