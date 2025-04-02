// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-foam py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-serif font-bold">Future Holders</span>
            <p className="mt-2">Elevating brands across industries.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-accent">Terms</a>
            <a href="#" className="hover:text-brand-accent">Privacy</a>
            <a href="#" className="hover:text-brand-accent">Contact</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-brand-medium/30 text-center">
          <p>© {new Date().getFullYear()} Future Holders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}