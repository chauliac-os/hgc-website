// basePath helper for plain src attributes (audio, og images).
// next/image handles basePath itself; <audio> does not.
export const bp = (p: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${p}`;
