class first{
    private _age:number;
    private _name:string;
    public get age()
    {
        return this._age;
    }
    public get name()
    {
        return this._name;
    }
    public set age(theage:number)
    {
        if(theage<=0)
        {
             throw new Error('not valid');
             
        }
        this._age=theage
    }
    public set name(thename:string)
    {
        this._name=thename;
    }

}
let person=new first();
person.age=30;
person.name='Umesh';
console.log(`Age ${person.age} is of ${person.name}`);