import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

    // url of provider
    issuer: "http://localhost:5000",

    // url to redirect to after login
    redirectUri: "http://localhost:4200",

    // SPA's id (SPA = Service Provider )
    clientId: "js-mylog",

    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    scope: "openid profile"
};