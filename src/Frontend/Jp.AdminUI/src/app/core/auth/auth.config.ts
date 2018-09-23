import { AuthConfig } from "angular-oauth2-oidc";
import { environment } from "../../../environments/environment";
export const authConfig: AuthConfig = {

    issuer: environment.IssuerUri,
    requireHttps: environment.RequireHttps,
    clientId: "IS4-Admin",
    postLogoutRedirectUri: "http://localhost:4300/",
    redirectUri: window.location.origin + "/login-callback",
    scope: "openid profile email management-api.identityserver4-manager",
    oidc: true,
};
