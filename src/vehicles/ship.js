const Ship = () => (
    {
        name: 'Some Ship',
        sail: function() {
            console.log(this.name, 'sail');
        }
    }
)

const BlackPearl = () => (
    Object.assign(Ship(), { name: 'Black Pearl' })
)

export { Ship, BlackPearl };