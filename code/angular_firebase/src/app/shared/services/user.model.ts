
// by defining user data, force to use a consistent data model across the entire app
export interface User {
    uid: string;
    email: string;
    photoURL: string;
    displayName: string;
    emailVerified: boolean;
    profile: object;
    preference: object;
}

export interface Test {
    metadata: object;
    tags: object;
    users: object;
}
