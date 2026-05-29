import Image from 'next/image';

export default function RhinoMark({ size = 20 }: { size?: number }) {
  return (
    <span className="rhino-mark" aria-hidden="true" style={{ width: size, height: size }}>
      <Image
        className="rhino-mark__light"
        src="/assets/rhino-black.svg"
        alt=""
        width={size}
        height={size}
      />
      <Image
        className="rhino-mark__dark"
        src="/assets/rhino-white.svg"
        alt=""
        width={size}
        height={size}
      />
    </span>
  );
}
