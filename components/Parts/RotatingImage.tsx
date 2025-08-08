import { Box, Image } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

type Props = {
  images: string[];          // 表示したい画像の配列
  minMs?: number;            // 切替の最短間隔
  maxMs?: number;            // 切替の最長間隔
  width?: string | number;   // 例: "100%" / 600
  height?: string | number;  // 例: 320
  rounded?: string;          // 例: "xl"
  enableFade?: boolean;      // ふわっとフェード
};

export default function RotatingImage({
  images,
  minMs = 3000,
  maxMs = 7000,
  width = "100%",
  height = 320,
  rounded = "xl",
  enableFade = true,
}: Props) {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!images?.length) return;

    const nextDelay =
      Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;

    timerRef.current = window.setTimeout(() => {
      if (enableFade) {
        setFade(false);
        // フェードアウト後に画像を差し替え → フェードイン
        setTimeout(() => {
          setIdx((i) => (i + 1) % images.length);
          setFade(true);
        }, 200);
      } else {
        setIdx((i) => (i + 1) % images.length);
      }
    }, nextDelay);

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [idx, images, minMs, maxMs, enableFade]);

  if (!images?.length) return null;

  return (
    <Box
      w={{base:"100%",md:'50%'}}
      h={height}
      overflow="hidden"
      rounded={rounded}
      position="relative"
      borderRadius={4}
    >
      <Image
        src={images[idx]}
        alt={`slide-${idx}`}
        w="100%"
        h="100%"
        objectFit="cover"
        transition={enableFade ? "opacity .2s ease" : undefined}
        opacity={enableFade ? (fade ? 1 : 0) : 1}
        draggable={false}
      />
    </Box>
  );
}