const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Ben Amor Lina. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
