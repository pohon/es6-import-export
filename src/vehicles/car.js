// anonymous default export
export default (brand) => (
    {
        brand: brand,
        drive(){
            console.log(this.brand, ' drive');
        }
    }
)