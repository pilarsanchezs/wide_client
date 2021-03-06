/**
 * projects
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 999.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface ProjectsGetModelMetadataKeysRequest {
    /**
     * Project ID
     */
    project: string;
    /**
     * If set to \'true\' and the project field is set then the result includes metadate   keys from the subproject models
     */
    include_subprojects?: boolean;
    /**
     * Page number
     */
    page?: number;
    /**
     * Page size
     */
    page_size?: number;
}
