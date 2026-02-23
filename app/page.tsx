import Container from "@/components/Container";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex sm:flex-row gap-5 m-3 sm:w-200 flex-col">
      <Image
        src="/images/marketing.jpg"
        width={400}
        height={400}
        alt="marketing"
        className="rounded-lg"
      />
      <section className="w-90 border border-slate-300 rounded-lg shadow-lg">
        <div className="text-center">Marketing discussion here</div>
        <p className="px-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos illum
          excepturi architecto reprehenderit, ea deleniti rerum maxime
          consectetur nemo reiciendis magni ex nesciunt fuga animi suscipit
          ratione molestiae. Aliquam, non. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Quos illum excepturi architecto
          reprehenderit, ea deleniti rerum maxime consectetur nemo reiciendis
          magni ex nesciunt fuga animi suscipit ratione molestiae. Aliquam, non.
        </p>
      </section>
    </div>
  );
}
