
// gk tw kenapa kalo mau di aliasin, HARUS ada export nya disini
export const Manager = {
    dept : 'HR',
    job : 'Manager',
    whoami(){
        console.log(this.dept, this.job);
    }
}

export default Manager;