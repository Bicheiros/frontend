export default function Home() {
  return (
    <>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://placeimg.com/260/400/arch"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Wallets Connect Demo!</h1>
          <p className="py-6">
            This is wallet connect demo page created by ayden lee.If you get any
            problems when using this demo, feel free to connect me!
          </p>
          <label htmlFor="my-modal" className="btn btn-primary modal-button">
            Get Started
          </label>
        </div>
      </div>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            Click the connect button on the top of this page!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
