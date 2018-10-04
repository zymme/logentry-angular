import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

    // url of provider
    issuer: "http://localhost:5000",

    // url to redirect to after login
    redirectUri: "http://localhost:4200/login",

    // SPA's id (SPA = Service Provider )
    clientId: "js-mylog",

    responseType: "id_token token",

    logoutUrl: "http://localhost:4200/login",

    postLogoutRedirectUri: "http://localhost:4200/login",

        
    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    scope: "openid profile"
};