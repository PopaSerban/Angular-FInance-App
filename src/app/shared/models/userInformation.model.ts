

export class UserInformation{
     private id : string = '';
     private profilePicture: string='';
     private firstname: string='';
     private surname: string='';
     private email: string='';
     private adress: string='';
     private city: string='';
     private zipcode: string='';
     private phone: string='';
     private state: string='';
     private countryCode:string ='';

    constructor(){}

    
    public get Id() : string {
        return this.id;
    }
    
    public set Id(value : string) {
        this.id = value;
    }
    public get ProfilePicture() : string {
        return this.profilePicture;
    }
    
    public set ProfilePicture(value : string) {
        this.profilePicture = value;
    }
    public get FirstName() : string {
        return this.firstname;
    }
    
    public set FirstName(value : string) {
        this.firstname = value;
    }
    public get Surname() : string {
        return this.surname;
        
    }
    public set Surname(value : string) {
        this.surname = value;
    }
    public get Email() : string {
        return this.email;
    }
    
    public set Email(value : string) {
        this.email = value;
    }
    public get Adress() : string {
        return this.adress;
    }
    
    public set Adress(value : string) {
        this.adress = value;
    }
    public get City() : string {
        return this.city;
    }
    
    public set City(value : string) {
        this.city = value;
    }
    public get State(): string{
        return this.state;
    }
    public set State(value:string){
        this.state = value;
    }

    public get CountryCode(): string{
        return this.countryCode;
    }
    public set CountryCode(value:string){
        this.countryCode = value;
    }

    public get Zipcode() : string {
        return this.zipcode;
    }
    
    public set Zipcode(value : string) {
        this.zipcode = value;
    }
    public get Phone() : string {
        return this.phone;
    }
    
    public set Phone(value : string) {
        this.phone = value;
    }
    
    
}
