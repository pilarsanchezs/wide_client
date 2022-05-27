/**
 * users
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.14
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface User {
    /**
     * User ID
     */
    id?: string;
    /**
     * Full name
     */
    name?: string;
    /**
     * Given name
     */
    given_name?: string;
    /**
     * Family name
     */
    family_name?: string;
    /**
     * Avatar URL
     */
    avatar?: string;
    /**
     * Company ID
     */
    company?: string;
    /**
     * User\'s role (admin only)
     */
    role?: string;
    /**
     * Providers uses has logged-in with
     */
    providers?: object;
    /**
     * User creation date
     */
    created?: string;
    /**
     * User email
     */
    email?: string;
}
