import Footer from "@/components/Footer";

export const metadata = {
  title: "Casey | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
