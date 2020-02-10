export class Address {
    addressLine: string;
    city: string;
    state: string;
    postCode: string;

    clear() {
        this.addressLine = '';
        this.city = '';
        this.state = '';
        this.postCode = '';
    }
}

export class SocialNetworks {
    linkedIn: string;
    facebook: string;
    twitter: string;
    instagram: string;

    clear() {
        this.linkedIn = '';
        this.facebook = '';
        this.twitter = '';
        this.instagram = '';
    }
}

export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    accessToken: string;
    refreshToken: string;
    roles: number[];
    pic: string;
    fullname: string;
    occupation: string;
    companyName: string;
    phone: string;
    address: Address;
    socialNetworks: SocialNetworks;

    public constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }

    clear(): void {
        this.id = undefined;
        this.username = '';
        this.password = '';
        this.email = '';
        this.roles = [];
        this.fullname = '';
        this.accessToken = 'access-token-' + Math.random();
        this.refreshToken = 'access-token-' + Math.random();
        this.pic = './assets/media/users/default.jpg';
        this.occupation = '';
        this.companyName = '';
        this.phone = '';
        this.address = new Address();
        this.address.clear();
        this.socialNetworks = new SocialNetworks();
        this.socialNetworks.clear();
    }
}
