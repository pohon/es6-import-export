//default
const Yaris = (brand) => (
    {
        brand: brand,
        drive(){
            console.log(this.brand, ' baby driver');
        }
    }
)

const Jazz = () => (
    Object.assign(Yaris(), {brand: 'Hino'})
)

export { Yaris as default, Jazz };