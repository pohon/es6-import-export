// named export (non-default)
export const Suv = (brand) => (
    {
        brand : brand,
        driveArrow : () => {
            // console.log(this);
            console.log(this.brand, 'drive');
        },
        driveFunction : function() {
            // console.log(this);
            console.log(this.brand, 'drive');
        },
        drive(){
            // console.log(this);
            console.log(this.brand, 'drive');
        }
    }
)