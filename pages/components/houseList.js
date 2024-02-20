import HouseRow from "./houseRow";

const houses = [
    {
        id: 1,
        address: "217 W 57th St #PH, New York",
        country: "United States of America",
        price: 195000000,
    },
    {
        id: 2,
        address: "4 East 79th St, New York",
        country: "United States of America",
        price: 65000000,
    },
    {
        id: 3,
        address: "30 Mathews Rd, Wainscott",
        country: "United States of America",
        price: 59995000,
    },
    {
        id: 4,
        address: "1 Central Park South #PH2003, New York",
        country: "United States of America",
        price: 70000000,
    },
];

const HouseList = () => {
  return (
    <>
        <div>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map(h => <HouseRow key={h.id} house={h} />)}
                </tbody>
            </table>
        </div>
    </>
  );
};

export default HouseList;