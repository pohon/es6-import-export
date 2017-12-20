// named default export
const Truck = (brand) => (
    {
        brand: brand,
        drive(){
            console.log(this.brand + ' drive');
        }
    }
)

export default Truck;