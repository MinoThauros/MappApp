export type Location={
    lat:number,
    lng:number
}

export type PlaceProp={
    title:string,
    imageUri:string,
    address:string,
    location:Location,
    id:string
}

export class Place implements PlaceProp{
    title:string;
    imageUri:string;
    address:string;
    location:Location;
    id:string
    

    constructor(
        title:string,
        imageUri:string,
        address:string,
        location:Location,
    ){
        this.title=title;
        this.imageUri=imageUri;
        this.address=address;
        this.location=location;
        this.id= new Date().toString()+Math.random().toString()

    }
}