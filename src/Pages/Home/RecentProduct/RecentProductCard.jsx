const RecentProductCard = () => {
  return (
    <div>
      <div className="card w-96 rounded-none bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div>
          <p>Rating</p>
          <p>(2 customer reviewed)</p>
          </div>
          <h2 className="card-title">
            Name
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <div>
            <p>discount Price</p>
            <p>price</p>
          </div>
          <div className="card-actions justify-end">
            <div className="">like btn</div>
            <div className="btn ">view Detail btn</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProductCard;
