const Footer = () => {
  return (
    <div className="py-2 text-center">
      <footer
        className="text-white sticky top-[100vh] pt-4 pb-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <p>
          Made with ❤️ by{" "}
          <a
            className="font-bold"
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vansh
          </a>
        </p>
        <p>Powered by VWS</p>
      </footer>
    </div>
  );
};

export default Footer;
