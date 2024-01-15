const Modal = () => {
  return (
    <div className="">
      <dialog id="my_modal_1" className="modal bg-blur-lg">
        <div className="card lg:card-side bg-base-100 lg:w-2/3">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Toyname</h2>
            <p>Seller name</p>
            <p>Seller email</p>
            <p>Price</p>
            <p>Rating</p>
            <p>Avaiabke Quantity</p>
            <p>Detail Description</p>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;

/*


*/
