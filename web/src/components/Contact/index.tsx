function Footer() {
  return (
    <footer className="bg-yellow py-8 flex flex-col items-center gap-14">
      <h1 className="text-3xl font-bold">Contact</h1>

      <div className="grid grid-cols-3 grid-rows-1 w-5/6">
        <div className="flex flex-col gap-4 w-5/6">
          <h2 className="text-2xl font-bold">Pizza</h2>

          <p>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem</p>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-bold">Call us</h3>
            <p>12 992229512</p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Location</h3>
            <p>Rua loucona, 21 avenue Caragua Brazil 9000</p>
          </div>
        </div>

        <div>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="p-2 rounded text-xl" />
            <input type="email" placeholder="Email" className="p-2 rounded text-xl" />
            <textarea placeholder="Message" rows={4} className="p-2 rounded text-xl"></textarea>
            <button className="bg-black w-1/4 p-2 text-white font-bold rounded">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer
