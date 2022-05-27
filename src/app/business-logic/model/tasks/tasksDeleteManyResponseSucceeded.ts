/**
 * tasks
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.14
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { TaskUrls } from '././taskUrls';


export interface TasksDeleteManyResponseSucceeded {
    /**
     * ID of the succeeded entity
     */
    id?: string;
    /**
     * Indicates whether the task was deleted
     */
    deleted?: boolean;
    /**
     * Number of child tasks whose parent property was updated
     */
    updated_children?: number;
    /**
     * Number of models whose task property was updated
     */
    updated_models?: number;
    /**
     * Number of deleted output models
     */
    deleted_models?: number;
    urls?: TaskUrls;
}
