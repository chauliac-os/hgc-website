import Image from "next/image";

// The section divider: the book's red harpsichord roundel between two thin rules.
export default function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <Image src="/images/emblem-clavecin.png" alt="" width={30} height={30} />
    </div>
  );
}
